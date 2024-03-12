class AuthenticationService{
    registerSuccessfulLogin(username, password){
        sessionStorage.setItem('authenticatedUser', username);
        console.log("register done")
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

    IsUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        console.log("userIn")
        return true
    }
}

export default new AuthenticationService();