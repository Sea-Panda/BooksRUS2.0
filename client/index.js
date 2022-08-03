import * as React from "react"
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import { StoreProvider } from "easy-peasy";
import App from "./App";
import Auth from "./Auth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import EditUser from "./pages/EditUser";
import DeleteUser from './pages/deleteUser';
import "./assets/styles.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StoreProvider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} /> // The nested url segments
          map to nested component trees.
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path='/editUser' element={<EditUser />} />
        <Route path='/deleteUser' element={<DeleteUser />}/>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        <Route path="/books" />
      </Routes>
    </HashRouter>
  </StoreProvider>
);
