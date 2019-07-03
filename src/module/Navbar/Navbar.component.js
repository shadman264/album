import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/FilterList';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <TextField id="navbar-filter" />
              </Grid>
              <Grid item>
                <SearchIcon />
              </Grid>
            </Grid>
          </div>
          {/* <TextField
            id="standard-search"
            label="Search"
            type="search"
            className="navbar-search"
            margin="normal"
          />
          <IconButton edge="start" color="inherit" aria-label="Search">
            <SearchIcon />
          </IconButton> */}
        </Toolbar>    
      </AppBar>
    )
  }
}

export default Navbar;