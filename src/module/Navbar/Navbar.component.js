import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';


class Navbar extends Component{
  render() {
    return(
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Search">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="navbar-left">
            Albums
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="Search">
            <SearchIcon />
          </IconButton>
        </Toolbar>    
      </AppBar>
    )
  }
}

export default Navbar;