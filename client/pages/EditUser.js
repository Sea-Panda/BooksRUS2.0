import * as React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Nav from "../components/Nav";

// import * as React from 'react';
// import { useParams, useNavigate, Navigate, Routes, Route } from 'react-router-dom';
// import { useStoreState, useStoreActions } from 'easy-peasy';
// import ProfileBooks from '../components/booksForProfile';
// import Search from './Search';

export default function EditUser() {
  const user = useStoreState((state) => state.user);

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
            <form className='login-form' onSubmit={handleSubmit}>

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
