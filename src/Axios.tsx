import axios from 'axios'
import {BASE_URL, BASE_ADMIN_URL} from './components/Constants'

let authTokens = localStorage.getItem('authTokens')


export const user_axios = axios.create({
    baseURL:BASE_URL,
    headers:{
        Authorization: `Bearer ${localStorage.getItem('authTokens')}`
    },
});




