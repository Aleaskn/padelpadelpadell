import React from 'react';
import './App.module.css';
import avatar from './assets/images/avatar.jpg'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import * as ROUTES from './constants/routes'
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Landing from './components/Landing/Landing';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import PasswordForget from './components/PasswordForget/PasswordForget';
import Account from './components/Account/Account';
import Admin from './components/Admin/Admin';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { useUserAuth } from './components/context/UseAuthContext';
import { Typography } from '@mui/material';
import StandardButton from "./components/Button";
import Icon from "./components/Icons";
import ImgAvatar from "./components/Avatar";
import Player from "./components/Player";
import SearchBar from "./components/SearchBar";
import BlogPost from "./components/BlogPost";
import Header from "./components/Header";
import Search from "./components/Search";
import Courts from "./pages/Courts/Courts";
import Court from "./pages/Court";

function App() {
  let { user } = useUserAuth();
  if(user){
    console.log('user:',user)
  }

  return (

      <div>
          <Header />
          <Routes>
              <Route path={ROUTES.HOME} element={<Home/>} />
              <Route path={ROUTES.SIGN_IN} element={<SignIn/>} />
              <Route path={ROUTES.SIGN_UP} element={<SignUp/>} />
              <Route path={ROUTES.COURTS} element={<Courts />}/>
              <Route path={ROUTES.COURT} element={<Court />} />
          </Routes>
      </div>



    // <div>
    //   {user && <Navigation />}
    //   <Routes>
    //     <Route path={ROUTES.SIGN_IN} element={<SignIn/>} />
    //     <Route path={ROUTES.LANDING} element={<SignIn/>} />
    //     <Route
    //       path={ROUTES.HOME}
    //       element={
    //         <ProtectedRoutes>
    //           <Home />
    //         </ProtectedRoutes>
    //       }
    //     />
    //     <Route path={ROUTES.ACCOUNT} element={
    //       <ProtectedRoutes>
    //         <Account />
    //       </ProtectedRoutes>
    //     }/>
    //     <Route path={ROUTES.ADMIN} element={
    //       <ProtectedRoutes>
    //         <Admin />
    //       </ProtectedRoutes> //     }/>
    //     <Route path={ROUTES.SIGN_UP} element={<SignUp/>} />
    //   </Routes>
    // </div>

  );
}

export default App;
