import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import HomePage from './views/HomePage';
import Login from './views/Login';

const App = () => {

    return (<>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </>);
}

export default App