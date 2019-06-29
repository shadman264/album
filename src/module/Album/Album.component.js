import React, { Component } from 'react';
import data from './Album.mock';
import {Flex} from 'reflexbox';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import _startCase from 'lodash/startCase';
import _toLower from 'lodash/toLower';

export default class Album extends Component {
	constructor() {
    super();
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
		this.state = {
			albumData: data,
			albumList: []
		}
  }
  
  handleThumbnailClick(album) {
    console.log('i came here');
    console.log(album);
  }

	componentDidMount() {
		let albumList = [];
		let albumRow = [];

		data.map((album, index) => {
			albumRow.push(
				<Card className="album card">
					<CardActionArea>
						<CardMedia
							className="album media"
							image={album.thumbnailUrl}
							title={album.title}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{`Album ${(index+1)}`}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{_startCase(_toLower(album.title))}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			)
			if((index + 1) % 3 === 0) {
				albumList.push(
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
			albumList
		})
	}

	render() {

		return (
			<div className='album-wrapper'>

			 	{this.state.albumList}
		 	</div>
		);
	}
}