import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import FirstHome from './components/FirstHome';
import MyList from './components/MyList';
import SecondHome from './components/SecondHome';
import SharedListsInvited from './components/SharedListsInvited';
import SharedListsOrga from './components/SharedListsOrga';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/orga" element={<FirstHome />}></Route>
        <Route path="/invited" element={<SecondHome />}></Route>
        <Route path="/listsorga" element={<SharedListsOrga />}></Route>
        <Route path="/listsinvited" element={<SharedListsInvited />}></Route>
        <Route path="/mylist" element={<MyList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
