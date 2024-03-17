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

    GetLoggedInUser(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user ===  null) return ''
        return user
    }
}

export default new AuthenticationService();