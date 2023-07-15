import React from 'react';
import './App.css';
import Home from '../src/application/containers/Home'
import Dashboard from '../src/application/containers/Dashboard'
import Projects from '../src/application/containers/Projects'
import ManageProjects from '../src/application/containers/ManageProjects'
import Accounts from '../src/application/containers/Accounts'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/manage-projects' element={<ManageProjects />} />
      <Route path='/accounts' element={<Accounts />} />
     </Routes>
    </div>
  );
}

export default App;
