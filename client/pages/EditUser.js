import React, { useState, useEffect } from 'react';
import { useStoreState, useStoreActions } from "easy-peasy";
import Nav from "../components/Nav";
import { useParams, useNavigate, Navigate, Routes, Route } from 'react-router-dom';

// import * as React from 'react';
// import { useParams, useNavigate, Navigate, Routes, Route } from 'react-router-dom';
// import { useStoreState, useStoreActions } from 'easy-peasy';
// import ProfileBooks from '../components/booksForProfile';
// import Search from './Search';

export default function EditUser() {
  const user = useStoreState((state) => state.user);
  const updateUser = useStoreActions((actions) => actions.updateUser);
  let navigate = useNavigate();
  // const handleSubmit = () => {
  //   console.log('test')
  // }
  async function handleSubmit(event) {
    event.preventDefault();
    // request to /auth/login
    const data = await fetch('/user/editUser', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: user._id, username, email, password }),

    })
      .then((resp) => resp.json())
      .catch((err) => console.log('error in /auth/edituser'));

    if (data === null) {
      //tell user that login credentials were wrong
      console.log('invalid credentials');
    } else {
      console.log('new data: ', data)
      updateUser(data);
      navigate('/profile', { replace: true }); //navigates to profile if login was successful
    }
  }



  const [username, setUsername] = useState()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  return (
    <div>
      <Nav />
      <div>
        <div className="card text-center">
          <div className="card-body">
            <h3 className="card-title-old">Current Profile Information</h3>
                <p className="card-text">Username: {user.username}</p>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text"> Password: {user.password}</p>
            <h3 className="card-title-new">Enter New User Profile Information</h3>
            <div className='form'>
            <form className='update-login-form' onSubmit={handleSubmit}>

              <div className='input_field' >
                <label htmlFor='email'>New Username:</label>

              {/* <div className='input_field'>
                <label htmlFor='username'>Username</label> */}


                <div className='input_box'></div>
                <input
                  id='username'
                  placeholder='John Smith'
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>

              <div className='input_field'>
                <label htmlFor='email'>New Email:</label>

                <div className='input_box'></div>
                <input
                  id=' email'
                  placeholder='email@example.com'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>

              <br></br>
              <div className='input_field'>
                <label for='password'>New Password:</label>

                <div className='input_box'>
                  <input
                    className='input_box'
                    type='password'
                    id='password'
                    placeholder='Password'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <br></br>

              <div className='btn'>
                <button className='btn' type='submit'>
                  Submit User Changes
                </button>
              </div>
            </form>
        </div>    
      </div>
      </div>      
    </div>
    </div>
  );
}
