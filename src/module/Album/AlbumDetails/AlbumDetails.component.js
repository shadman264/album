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
    return(
      <Card 
        className="album card"
      >
        <CardActionArea>
          <CardMedia
            className="album media"
            image={this.props.album.thumbnailUrl}
            title={this.props.album.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {`Album ${(this.props.album.id)}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {_startCase(_toLower(this.props.album.title))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default AlbumDetails;