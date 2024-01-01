import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login.jsx';
import Dashboard from './components/Dashboard';
import HomePage from './pages/HomePage.jsx';
import AuthProvider from './hooks/AuthProvider';
import PrivateRoute from './router/route';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute/>}>
              <Route path="/dashboard" element={<Dashboard/>} />
            </Route>
            {/* Other routes */}
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
