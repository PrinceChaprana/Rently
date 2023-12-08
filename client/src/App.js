import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

import DataProvider from './context/DataProvider';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Account from './components/account/Account';
import SellerPage from './components/sellerpage/SellerPage';
import Create from './components/sellerpage/create/Create';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem('accessToken');
  return isAuthenticated && token ?
    <>
      <Outlet />
    </> : <Navigate replace to='/login' />
};

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
          <Route path='/' element={<Home isAuthenticated={isAuthenticated} />} />
          <Route path='/profile' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/account' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/account' element={<Account />} />
          </Route>
          <Route path='/sell' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/sell' element={<SellerPage />} />
          </Route>
          <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/create' element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
