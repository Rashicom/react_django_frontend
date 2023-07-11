import React from 'react';
import Admin_home from './components/Admin_home.tsx/Admin_home';
import Admin_login from './components/Admin_login/Admin_login';
import Footer from './components/Common/Footer/Footer';
import NavvBar from './components/Common/NavBar/NavBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (

    <div>
      <NavvBar/>
      <Login/>
      <Footer/>
    </div>

  );
}

export default App;
