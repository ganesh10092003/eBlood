import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Registered from './components/Registered.js'
import Registration from './components/Registration.js'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Registered /> */}
      <Registration />
    </div>
  );
}