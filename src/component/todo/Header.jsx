import React, {Component} from 'react'
import { Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class Header extends Component{
    render(){
        const IsUserLoggedIn = AuthenticationService.IsUserLoggedIn();
        console.log(IsUserLoggedIn)
        return(
            <header>
                <nav className='nav navbar-expand-md navbar-dark bg-dark'>
                    <div><a href="https://github.com/DEEKSHITH-GD" className='navbar-link'>GitHub</a></div>
                    <ul className='navbar-nav'>
                        {IsUserLoggedIn && <li ><Link className='nav-link' to="/welcome/:name">Home</Link></li>}
                        {IsUserLoggedIn && <li ><Link className='nav-link' to="/todo">Todos</Link></li>}
                    </ul>
                    <ul className='navbar-nav navbar-collapse justify-content-end'>
                        {!IsUserLoggedIn && <li ><Link className='nav-link' to="/login">Login</Link></li>}
                        {IsUserLoggedIn && <li ><Link className='nav-link' to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header