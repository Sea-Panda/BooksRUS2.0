import * as React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

export default function () {
  const user = useStoreState((state) => state.user);
  const logoutUser = useStoreActions((actions) => actions.logout);
  let navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="container-fluid">

        {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
          {/* <ul className="navbar-nav"> */}

            <li className="nav-item1">
              <a className="navbar-brand" onClick={() => navigate("/profile", { replace: true })}>Profile</a>
            </li>
            <li className="nav-item2">
              <a className="navbar-brand" onClick={() => navigate("/search", { replace: true })}>Search</a>
            </li>
            
            <li className="nav-item3">
              <a className="navbar-brand" onClick={() => {
                logoutUser(user);
                navigate("/auth/login", { replace: true });
              }} >Logout</a>
            </li>

          {/* </ul> */}
        {/* </div> */}

      </div>
    </nav>
  )
}