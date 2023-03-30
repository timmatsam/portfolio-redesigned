import React from 'react';
import { NavBar } from './NavBar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';


//An <Outlet> should be used in parent route elements to render their child route elements. 
function App() {
  return (

    <div className="App">
      <div className="Box">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default App;
