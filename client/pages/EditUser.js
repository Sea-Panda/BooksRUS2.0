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
            <p class="card-text">New Username:</p>
            <p class="card-text">New Email:</p>
            <p class="card-text">New Password:</p>
          </div>
        </div>
      </div>
    </div>
  );
}
