// import * as React from "react";
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
  console.log('THIS IS USER FROM EDIT USER', user);
  const updateUser = useStoreActions((actions) => actions.updateUser);
  let navigate = useNavigate();

  async function handleEditProfileSubmit (event) {
    /* It prevents the default action of the event from happening. */
    event.preventDefault();
    const userInfo = { username, email, password , _id: user._id}
    
    const updatedData = await fetch (`/auth/${user._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(userInfo),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log('THIS IS RESPONSE FROM HANDLEEDITPROFILE', res)
        updateUser(res);
        navigate ('/profile', { replace: true })
      })
    /* This is the code that is supposed to update the user profile. */
      // updateUser(updatedData)
      // navigate ('/profile', { replace: true })

      .catch((err) => console.log('Error in handleEditProfileSubmit in EditUser.js'))
  }

  // async function handleDeleteProfile(){
  //   console.log('I am inside handle delete', user._id);
  //   const userToDelete = await fetch(`/auth/${user._id}`,{
  //     method: 'DELETE',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ _id : user._id }),
  //   })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch(err => console.log('Error in Handle Delete Profile'))
    
  //   navigate('/auth', { replace: true });
  // }

  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  return (
    <div>
      <Nav />
      <div>
        <div class="card text-center">
          <div class="card-body">
            <h3 class="card-title-old">Current Profile Information</h3>
                <p class="card-text">Username: {user.username}</p>
                <p class="card-text">Email: {user.email}</p>
                <p class="card-text"> Password: {user.password}</p>
            <h3 class="card-title-new">Enter New User Profile Information</h3>
            <div className='form'>
            <form className='update-login-form' /*onSubmit={handleSubmit}*/>

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

              <div className='deleteBtn'>
                <button className='deleteBtn' type='submit' onClick={handleEditProfileSubmit}> 
                  Submit User Changes
                </button>
              </div>
            </form>
          <div></div>
          <span></span>
          {/* <h3 class="card-title-new">Delete User Profile</h3>
          <div className='deleteBtn' onClick={handleDeleteProfile}>
              <button className='deleteBtn' type='submit'>
                Confirm to Delete User Profile
              </button>
          </div> */}
        </div>    
      </div>
      </div>      
    </div>
    </div>
  );
}
