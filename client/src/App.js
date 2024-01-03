import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

import DataProvider from './context/DataProvider';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Account from './components/account/Account';
import SearchPage from './components/searchpage/SearchPage';
import SellerPage from './components/sellerpage/SellerPage';
import Create from './components/sellerpage/create/Create';
import Detail from './components/products/detailView/Detail';
import Wishlist from './pages/Wishlist';
import Chat from './pages/chat/ChatPage';
import Footer from './components/footer/Footer';

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
          <Header isAuthenticated={isAuthenticated} isUserAuthenticated = {isUserAuthenticated}/>
        <Routes>
          <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
          <Route path='/' element={<Home isAuthenticated={isAuthenticated} />} />
          
            <Route path='/profile/:username' element={<Profile />} />
          
          <Route path='/account' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/account' element={<Account />} />
          </Route>
          <Route path='/sell' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/sell' element={<SellerPage />} />
          </Route>
          
          <Route path='/wishlist' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/wishlist' element={<Wishlist />} />
          </Route>

          <Route path='/search/:keyword' element={<SearchPage />} />
          <Route path = 'detail/:id' element={<Detail/>} />

          <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/create' element={<Create />} />
          </Route>
          <Route path='/chat/:username' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/chat/:username' element={<Chat />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
