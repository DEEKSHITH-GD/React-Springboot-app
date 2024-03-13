// TodoApp.jsx
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import TodoComponent from './TodoComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class TodoApp extends Component {
  render() {
    return (
      <Router>
        <div className='TodoApp'>
          <Header />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/welcome/:name/*" element={<WelcomeComponent />} />
            <Route path="/todo" element={<TodoComponent />} />
            <Route path="/logout" element={<LogoutComponent />} />
            {/* <Route
              path="/welcome/:name/*"
              element={<AuthenticatedRoute path="/welcome/:name/*" element={<WelcomeComponent />} />}
            />
            <Route
              path="/todo/*"
              element={<AuthenticatedRoute path="/todo/*" element={<TodoComponent />} />}
            />
            <Route
              path="/logout"
              element={<AuthenticatedRoute path="/logout" element={<LogoutComponent />} />}
            /> */}
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default TodoApp;
