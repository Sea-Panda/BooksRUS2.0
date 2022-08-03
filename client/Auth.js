import React, { Component, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Outlet, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'
import Nav from './components/Nav.js'

class Auth extends Component {
  render() {
    return (

          <div class="jumbotron" >

            <h1 class="display-4">BooksRUs</h1>
            <p class="lead">Build a library of your own!</p>
            <br></br>
            <p>Search and discover new books catered to your personal taste. Register now to start.</p>
            <p class="lead">
            <Link class="btn btn-primary btn-lg" to='login'>Login</Link>
            <br/><br/>
              <a class="btn btn-primary btn-lg" href="/#/auth/register" role="button">Register</a>
            </p>




        <Outlet />
      </div>
    )
  }
}



export default Auth;