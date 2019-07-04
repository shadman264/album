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
      albumId: '',
      title: '',
      url: '',
      thumbnailUrl: ''
    }
  }

  handleFieldChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    let newAlbum = {...this.state};
    const newAlbumId = this.props.albumData[this.props.albumData.length - 1].id + 1;
    newAlbum = {...newAlbum, id: newAlbumId}
    newAlbum.albumId = parseInt(newAlbum.albumId);
    this.props.addAlbum(newAlbum);
    this.props.history.push('/');
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
                  name="title"
                  id="standard-name"
                  label="Title"
                  margin="dense"
                  fullWidth={true}
                  value={this.state.title}
                  onChange={this.handleFieldChange}
                />
              </Box>
              <Box w={1}>
                <InputMask
                  mask="9999999999"
                  maskChar=" "
                  value={this.state.albumId}
                  onChange={this.handleFieldChange}
                >
                  {() => <TextField
                    name="albumId"
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
                  name="url"
                  id="standard-name"
                  label="URL"
                  margin="dense"
                  fullWidth={true}
                  value={this.state.url}
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
                <Button variant="contained" color="secondary" onClick={this.handleSubmit}>
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