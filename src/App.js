import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import FirstHome from './components/FirstHome';
import SecondHome from './components/SecondHome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/orga" element={<FirstHome />}></Route>
        <Route path="/invited" element={<SecondHome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
