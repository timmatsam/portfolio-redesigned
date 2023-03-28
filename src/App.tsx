import React from 'react';
import './App.css';
import { NavBar } from './NavBar';
import { Outlet } from 'react-router-dom';


//An <Outlet> should be used in parent route elements to render their child route elements. 
function App() {
  return (

    <div className="App">
      <div className="Box">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}
export default App;
