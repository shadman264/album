import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/FilterList';

class Filter extends Component{
  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      filterTitle: ''
    }
  }
  handleFieldChange(e) {
    this.props.filterAlbums(e.target.value);
  }
  render() {
    return(
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <TextField id="navbar-filter" onChange={this.handleFieldChange}/>
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