import axios from 'axios'

export const randomuserApi = axios.create({
    baseUrl:"/randomuser"
})
