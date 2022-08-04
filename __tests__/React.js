import React from 'React';
import { StoreProvider } from 'easy-peasy';
// import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';
// import '../client/assets/styles.scss';

// import index from '../client';
import App from '../client/App';
import Auth from '../client/Auth';
import store from '../client/store';
import Book from '../client/components/Book';
import Comment from '../client/components/Comments';
import Nav from '../client/components/Nav';
import ProfileBooks from '../client/components/booksForProfile';
import Proile from '../client/pages/Profile';
import Register from '../client/pages/Register';
import search from '../client/pages/Search';
import Login from '../client/pages/Login';
import EditUser from '../client/pages/EditUser';
import DeleteUser from '../client/pages/deleteUser';

// describe('Testing React Components', () => {
    
//     describe('Auth', () => {
//       let text;
  
//       beforeAll(() => {
//         text = render(<Auth />);
//       });

//         test('should render BooksRUS title, login and register buttons', () => {
//           expect(text.toHaveTextContent('BooksRUs'));
//           expect(text.toHaveTextContent('Build a library of your own!'));
//           expect(text.toHaveTextContent('Search and discover new books catered to your personal taste. Register now to start.'));
//         //   screen.getAllByText
//         })
//     })
// })

