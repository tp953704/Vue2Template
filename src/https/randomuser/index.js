import {randomuserApi} from "../base"
import { Promise } from "q";

// 請求攔截
randomuserApi.interceptors.request.use(function(config){
    console.log(config)
    return config
}, function (error){
    console.log(error)
    return Promise.reject(error)
})

randomuserApi.interceptors.response.use(function (response){
    console.log(response);
    return response
}, function(error) {
    console.log(error)
    return Promise.reject(error)
})

export const randomuserGet = ()=>{
    return randomuserApi.get("/api");
}