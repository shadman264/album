import React from 'react';

import Album from './module/components/Album/Album.container';
import Navbar from './module/Navbar/Navbar.component';
import AlbumDetails from './module/components/AlbumDetails/AlbumDetails.container';
import AddAlbum from './module/components/AddAlbum/AddAlbum.container';

import {BrowserRouter, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory()
  return (
    <BrowserRouter history={history}>
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
