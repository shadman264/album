import React from 'react';

import Album from './module/components/Album/Album.container';
import Navbar from './module/Navbar/Navbar.component';
import AlbumDetails from './module/components/AlbumDetails/AlbumDetails.container';

import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path='/' component={Album} />
        <Route path='/details' component={AlbumDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;
