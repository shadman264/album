import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Filter from '../Filter/Filter.container';

class Navbar extends Component{
  render() {
    return(
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="navbar-left">
            Albums
          </Typography>
          <Filter/>
        </Toolbar>    
      </AppBar>
    )
  }
}

export default Navbar;