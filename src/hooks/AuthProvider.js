import { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('site') || '')
    const navigate = useNavigate()
    const loginAction = async(data) => {
        try {
            const response = await fetch('https://vuemadeeasy.onrender.com/auth/login', {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            const res = await response.json();
            if (res.data) {
                setUser(res.data.user);
                setToken(res.token);
                localStorage.setItem('site', res.token);
                navigate('/dashboard');
                return;
            }
            throw new Error(res.message);
        } catch (err) {
            alert(err);
        }
    }
    const registerAction = () => {
        //register logic
    }

    const googleAuthResponse = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        const fetchUserData = async () => {
          if (user) {
            try {
              const res = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                method: "GET",
                headers: {
                  "Authorization": `Bearer ${user.access_token}`,
                  "Accept": "application/json",
                },
              });
      
              if (res.status === 200) {
                const data = await res.json();
                setToken(user.access_token);
                setUser(data);
                navigate('/dashboard');
              } else {
                console.error(`Failed to fetch user information. Status: ${res.status}`);
              }
            } catch (error) {
              console.error("Error fetching user information:", error);
            }
          }
        };
        fetchUserData();
      },[user]);

    const googleAuthLogout = (err) => {
        googleLogout();
        setUser(null);
        navigate('/login');
        console.log('sucess')
    }
    const logOut = () => {
        setUser(null);
        setToken('');
        localStorage.removeItem('site');
        navigate('/login');
    }

    return ( 
        <AuthContext.Provider value={{ token, user, loginAction, googleAuthResponse, googleAuthLogout, registerAction, logOut }}>
           { children } 
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext);
}