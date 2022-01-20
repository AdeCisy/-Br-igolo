
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
<<<<<<< HEAD
        <Route exact path="/orga" element={<FirstHome />}></Route>
        <Route exact path="/invited" element={<SecondHome />}></Route>
=======
        <Route path="/orga" element={<FirstHome />}></Route>
        <Route path="/invited" element={<SecondHome />}></Route>
        <Route path="/listsorga" element={<SharedListsOrga />}></Route>
        <Route path="/listsinvited" element={<SharedListsInvited />}></Route>
        <Route path="/mylist" element={<MyList />}></Route>
>>>>>>> a333631c53053d7e80d0a4014c0e0dcdd119d2a2
      </Routes>
    </div>
  );
}

export default App;