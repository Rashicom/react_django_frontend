import React from 'react';
import Admin_home from './components/Admin_home.tsx/Admin_home';
import Admin_login from './components/Admin_login/Admin_login';
import Footer from './components/Common/Footer/Footer';
import NavvBar from './components/Common/NavBar/NavBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NotFound from './components/Common/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavvBar/>

      <Routes>
        <Route path='*' element={<NotFound/>} />
        <Route path='/' element={<Login/>} />
        <Route path='signup' element={<Signup/>} />
        <Route path='home' element={<Home/>} />
        <Route path='admin_login' element={<Admin_login/>} />
        <Route path='admin_home' element={<Admin_home/>} />
      </Routes>


      <Footer/>
    </div>
    </BrowserRouter>

  );
}

export default App;
