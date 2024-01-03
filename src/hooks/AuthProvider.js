import { useContext , createContext , useState} from 'react';
import { useNavigate } from "react-router-dom";
//import { googleLogout } from '@react-oauth/google';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [ user , setUser ] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('site') || '')
  const navigate = useNavigate()
  const loginAction = async (data) => {
    try{
      const response = await fetch('https://vuemadeeasy.onrender.com/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const res = await response.json();
      if(res.data) {
        setUser(res.data.user);
        setToken(res.token);
        localStorage.setItem('site', res.token);
        navigate('/dashboard');
        return;
      } 
      throw new Error(res.message);
    }catch(err){
      alert(err);
    }
  }
  const registerAction = () => {
    //register logic
  }
  const googleAuthResponse = async (res) => {
    try {
      setToken(res.credential);
      setUser(res);
      const user = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${res.credential}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${res.credential}`,
          "Accept": "application/json",
        },
      })
      if(user.status === 200){
        console.log(user);
        navigate('/dashboard')
        return;
      }
      throw Error(user)
    }catch(err){
      console.log(err, 'error');
    }
  }
  const googleAuthError = (err) => {
    //show flash
    console.log(err);
  }
  const logOut = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('site');
    navigate('/login');
  }
  
  return (
    <AuthContext.Provider value={{ token, user, loginAction,googleAuthResponse, googleAuthError, registerAction, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext); 
}