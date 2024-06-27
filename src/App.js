import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnaSayfa from './components/AnaSayfa';
import ForgetPassword from './components/ForgetPassword';
import Data from "./components/Data";
import About from './components/About';
import Profile from './components/Profile';
import Login from './components/Login.jsx';
import VeriEkleSil from './components/VeriEkleSil.jsx'
import Day from './components/Day.jsx';
import Menu from"./components/Menu.jsx";


const App = () => {
  return (
    <div className='a1'>
    <Router>
      <Routes>
        <Route path='/' element={<AnaSayfa />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/data' element={<Data />} />
        <Route path='/about' element={<About />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Kayit Ol' element={<VeriEkleSil />} />
        <Route path='/day' element={<Day/>} />
        <Route path='/Menu' element={<Menu/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;


