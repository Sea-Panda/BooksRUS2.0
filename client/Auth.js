import React, { Component, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Outlet, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'
import Nav from './components/Nav.js'

class Auth extends Component {
  render() {
    return (

          <div className="jumbotron" >

            <h1 className="display-4">BikesRUs</h1>
            <p className="lead">Build a library of your own!</p>
            <br></br>
            <p>Search and discover new books catered to your personal taste. Register now to start.</p>
            <p className="lead">
            <Link className="btn btn-primary btn-lg" to='login'>Login</Link>
            <br/><br/>
              <a className="btn btn-primary btn-lg" href="/#/auth/register" role="button">Register</a>
            </p>




        <Outlet />
      </div>
    )
  }
}



export default Auth;