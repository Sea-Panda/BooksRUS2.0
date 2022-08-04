import React, { useState, useEffect } from 'react';
import { useStoreState, useStoreActions } from "easy-peasy";
import Nav from "../components/Nav";
import { useParams, useNavigate, Navigate, Routes, Route } from 'react-router-dom';

export default function DeleteUser(){
  const user = useStoreState((state) => state.user);
  console.log('This is in delete user', user);
  let navigate = useNavigate();


  async function handleDeleteProfile(){
    console.log('I am inside handle delete', user._id);
    const userToDelete = await fetch(`/auth/${user._id}`,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id : user._id }),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(err => console.log(`Error in Handle Delete Profile: ${err}`))
    
    navigate('/auth', { replace: true });
  }

  return(
    <div>
      <Nav />
      <div>
        <div class='card text-center'>
          <div class='card-body'>
          <h3 class="card-title-new">Delete User Profile</h3>
          <div className='deleteBtn' onClick={handleDeleteProfile}>
              <button className='deleteBtn' type='submit'>
                Confirm to Delete User Profile
              </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}