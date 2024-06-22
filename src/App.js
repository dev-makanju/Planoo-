import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login.jsx';
import Dashboard from './components/dashboard/Dashboard';
import PlannoAI from './components/planno-ai/PlannoAI.jsx';
import Task from '../src/pages/Task.jsx';
import HomePage from './pages/HomePage.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import AuthProvider from './hooks/AuthProvider';
import PrivateRoute from './router/route';
import GuestLayout from './components/layout/GuestLayout.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import PageTitle from './components/Nav/Meta/PageTitle.jsx';
import NotFound from './pages/NotFound.jsx';
import Pricing from './pages/Pricing.jsx';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/blog' element={<GuestLayout><Blog/></GuestLayout>}/>
            <Route path='/about' element={<GuestLayout><About/></GuestLayout>}/>
            <Route path='/blog/post/:id' element={<GuestLayout><SingleBlog/></GuestLayout>}/>
            <Route exact path='/*' element={
              <>
                <PageTitle title='Not Found'/> 
                <NotFound/>
              </>
            }/>
            <Route exact path='/pricing' element={<GuestLayout><Pricing/></GuestLayout>}/>
            <Route element={<PrivateRoute/>}>
              {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
            </Route>
            {/* Other routes */}
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/manage-task" element={<Task/>} />
            <Route path="/manage-task/templates/:id" element={<PlannoAI/>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
