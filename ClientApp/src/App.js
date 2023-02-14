import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import ForgotPassword from './views/ForgotPassword';
import HomePage from './views/HomePage';
import Login from './views/LogIn';

const App = () => {

    return (
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/ForgotPassword' element={<ForgotPassword />}/>
      </Routes>
    );
}

export default App