import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from '../src/application/containers/Home'
import Dashboard from '../src/application/containers/Dashboard'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
     </Routes>
    </div>
  );
}

export default App;
