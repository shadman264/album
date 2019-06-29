import React from 'react';
import Album from './module/Album/Album.container';
import Navbar from './module/Navbar/Navbar.component';


function App() {
  return (
    <div>
      <Navbar/>
      <div className="wrapper">
        <Album/>
      </div>
    </div>
  );
}

export default App;
