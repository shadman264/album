import React, { Component } from 'react';
import data from './Album.mock';
import {Flex, Box} from 'reflexbox';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Album extends Component {
	constructor() {
    super();
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
		this.state = {
			albumData: data,
			albumTable: []
		}
  }
  
  handleThumbnailClick(album) {
    console.log('i came here');
    console.log(album);
  }

	componentDidMount() {
		let albumTable = [];
    let albumRow = [];
		data.map((album, index) => {
			albumRow.push(
				<Box>
					<img src={album.thumbnailUrl} alt="thumbnail" onClick={() => this.handleThumbnailClick(album)}/>
				</Box>
			)
			if((index + 1) % 3 === 0) {
				albumTable.push(
					<Flex w={1} pt={2} justify='space-evenly'>
						{albumRow.map(row => {
							return row;
						})}
					</Flex>
				);
				albumRow = [];
			}
			return null;
		});
		this.setState({
			albumTable
		})
	}

	render() {
		// const albumThumbnails = data.map(album => {
		// 	return (
		// 		<img src={album.thumbnailUrl} alt="thumbnail"/>
		// 	)
		// })
		
		// return(
		// 	<div>
		// 		{this.state.albumTable}
		// 	</div>			
		// )
	// const classes = useStyles;

  return (
    <h1 className="album media">hellow</h1>
  );
	}
}