import React from 'react';

import Album from './module/components/Album/Album.container';
import Navbar from './module/Navbar/Navbar.component';
import AlbumDetails from './module/components/AlbumDetails/AlbumDetails.container';
import AddAlbum from './module/components/AddAlbum/AddAlbum.container';

import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path='/' component={Album} />
        <Route path='/details' component={AlbumDetails} />
        <Route path='/add' component={AddAlbum} />
      </div>
    </BrowserRouter>
  );
}

export default App;
