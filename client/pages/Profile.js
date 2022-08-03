import * as React from 'react';
import { useParams, useNavigate, Navigate, Routes, Route } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';
import ProfileBooks from '../components/booksForProfile';
import Nav from '../components/Nav';
import Search from './Search';
import EditUser from './EditUser';



export default function Profile() {
  const user = useStoreState((state) => state.user);
  const logoutUser = useStoreActions((actions) => actions.logout);
  let navigate = useNavigate();
  console.log('THIS IS user: ', user)
  const likedBooks = user.likedBooks;
  const likedBooksComponents = []
  for (let i = 0; i < likedBooks.length; i++) {
    const currentBook = likedBooks[i];
    likedBooksComponents.push(<ProfileBooks book={currentBook} key={i} />);
  }
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path='/user/editUser' element={<EditUser />} />
      </Routes>
      <div className='user-profile'>

        <div className='userButtons'>
<<<<<<< HEAD
          <button className='updateUserBtn' onClick={() => navigate("/user/editUser", { replace: true })}> Update User</button>
=======
          <button className='updateUserBtn' onClick={() => navigate("/editUser", { replace: true })}> Update User</button>
>>>>>>> 7d6c918d985618a4aba4d45c4506704baa82d284
          <div></div>
          <button className='deleteUserBtn' onClick={() => navigate("/deleteUser", { replace: true })}> Delete User</button>
        </div>

        <div>
          <div className="card text-center">
            <div className="card-body">
              <h3 className="card-title">User Profile</h3>
              <p className="card-text">User: {user.username}</p>
              <p className="card-text">Email: {user.email}</p>
            </div>
          </div>
        </div>

        <div className='favorite_books'>
          <div className="card text-center">
            <div className="card-body">
              <h3 className="card-title">My Favorite Books</h3>
              <p className="card-text">View all your favorite books in one place!</p>
              {likedBooksComponents}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}