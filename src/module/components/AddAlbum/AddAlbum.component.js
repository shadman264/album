import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import InputMask from 'react-input-mask';

import {Flex, Box} from 'reflexbox';

class AddAlbum extends Component{
  constructor() {
    super();
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      albumTitle: '',
      albumID: '',
      albumUrl: '',
      thumbnailUrl: ''
    }
  }

  handleFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {

  }


  render() {
    return(
      <Card 
        className="add-album"
      >
        <CardActionArea>
          <CardContent className="add-album text-field-container">
            <Flex justify="center">
              <Box justify="center">
              <Typography variant="h4" gutterBottom>
                New Album
              </Typography>
              </Box>
            </Flex>
            <Flex w={1} justify="space-evenly">
              <Box w={1} pr={3}>
                <TextField
                  name="albumTitle"
                  id="standard-name"
                  label="Title"
                  margin="dense"
                  fullWidth={true}
                  value={this.state.albumTitle}
                  onChange={this.handleFieldChange}
                />
              </Box>
              <Box w={1}>
                <InputMask
                  mask="9999999999"
                  maskChar=" "
                  value={this.state.albumID}
                  onChange={this.handleFieldChange}
                >
                  {() => <TextField
                    name="albumID"
                    id="standard-name"
                    label="Album ID"
                    margin="dense"
                    fullWidth={true}
                    />}
                </InputMask>

              </Box>
            </Flex>
            <Flex w={1} justify="space-evenly">
              <Box w={1}>
                <TextField
                  name="albumUrl"
                  id="standard-name"
                  label="URL"
                  margin="dense"
                  fullWidth={true}
                  value={this.state.albumUrl}
                  onChange={this.handleFieldChange}
                />
              </Box>
            </Flex>
            <Flex w={1} justify="space-evenly">
              <Box w={1}>
                <TextField
                  name="thumbnailUrl"
                  id="standard-name"
                  label="Thumbnail URL"
                  margin="dense"
                  fullWidth={true}
                  value={this.state.thumbnailUrl}
                  onChange={this.handleFieldChange}
                />
              </Box>
            </Flex>
            <Flex pt={3} justify="flex-end">
              <Box justify="center">
                <Button variant="contained" color="secondary">
                  Add
                </Button>
              </Box>
            </Flex>
          </CardContent>
        </CardActionArea>
      </Card>

    )
  }
}

export default AddAlbum;