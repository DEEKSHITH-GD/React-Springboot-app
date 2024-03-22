import axios from "axios";
import { API_URL, JPA_API_URL } from "../../constants";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class AuthenticationService{

    setupAxiosInterceptors(){
        let username = 'user';
        let password = '123';
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        axios.interceptors.request.use(
            (config) => {
                if(this.IsUserLoggedIn()){
                    config.headers.Authorization = basicAuthHeader
                }
                return config
            }
        )
    }

    createBasicAuthenticationToken(username, password){
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    executeJwtAuthenticationService(username, password){
        return axios.post(`${API_URL}/authenticate`, {username, password})
    }

    registerSuccessfulLoginForJwt(username, token){
        
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createJwtToken(token))
        console.log("register done")
    }

    createJwtToken(token){
        return 'Bearer ' + token
    }

    registerSuccessfulLogin(username, password){
        
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors()
        console.log("register done")
    }

    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }

    IsUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user===null) return false
        console.log("userIn")
        return true
    }

    GetLoggedInUser(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user ===  null) return ''
        return user
    }
}

export default new AuthenticationService();