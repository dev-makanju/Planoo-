import axios from 'axios'

const api = axios.create({
   baseURL: process.env.BASE_URL,
})

export const login = (data) => {
   return api.post('/login', data);
}

export const register = (data) => {
   return api.post('/register', data);
}