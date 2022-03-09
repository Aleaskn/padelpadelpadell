import React from 'react';
import './App.module.css';

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import * as ROUTES from './constants/routes'

import Navigation from './components/Navigation/Navigation';

import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import PasswordForget from './components/PasswordForget/PasswordForget';
import Account from './components/Account/Account';
import Admin from './components/Admin/Admin';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { useUserAuth } from './components/context/UseAuthContext';

//TODO: Add comments 

function App() {
  let { user } = useUserAuth();
  if(user){
    console.log('user:',user)
  }
  return (
    <div>
      {user && <Navigation />}
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<SignIn/>} />
        <Route path={ROUTES.LANDING} element={<SignIn/>} />
        <Route 
          path={ROUTES.HOME}
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          } 
        />
        <Route path={ROUTES.ACCOUNT} element={
          <ProtectedRoutes>
            <Account />
          </ProtectedRoutes>  
        }/>
        <Route path={ROUTES.ADMIN} element={
          <ProtectedRoutes>
            <Admin />
          </ProtectedRoutes> 
        }/>
        <Route path={ROUTES.SIGN_UP} element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
