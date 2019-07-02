import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import _startCase from 'lodash/startCase';
import _toLower from 'lodash/toLower';

class AlbumDetails extends Component{

  render() {
    if(this.props.activeAlbum) {
      return(
        <Card 
          className="album-details card"
        >
          <CardActionArea>
            <CardMedia
              className="album-details media"
              image={this.props.activeAlbum.thumbnailUrl}
              title={this.props.activeAlbum.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {`Album ${(this.props.activeAlbum.id)}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {_startCase(_toLower(this.props.activeAlbum.title))}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }
    return null;
  }
}

export default AlbumDetails;