import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/FilterList';

class Filter extends Component{
  render() {
    return(
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField id="navbar-filter"/>
          </Grid>
          <Grid item>
            <SearchIcon />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Filter;