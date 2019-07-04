import React from 'react';

import Album from './module/components/Album/Album.container';
import Navbar from './module/Navbar/Navbar.component';
import AlbumDetails from './module/components/AlbumDetails/AlbumDetails.container';
import AddAlbum from './module/components/AddAlbum/AddAlbum.container';

import {Router, Route} from 'react-router-dom';
import { createBrowserHistory } from "history";

function Root() {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <div>
        <Navbar/>
        <Route exact path='/' component={Album} />
        <Route path='/details' component={AlbumDetails} />
        <Route path='/add' component={AddAlbum} />
      </div>
    </Router>
  );
}

export default Root;
