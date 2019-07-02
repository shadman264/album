import React, { Component } from 'react';
// import data from './Album.mock';
import {Flex} from 'reflexbox';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import _startCase from 'lodash/startCase';
import _toLower from 'lodash/toLower';

import {ALBUM_DATA_URL} from './Album.constants';

export default class Album extends Component {
	constructor() {
    super();
		this.handleAlbumClick = this.handleAlbumClick.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
			albumData: [],
			albumList: [],
			startIndex: 0
		}
  }
	
	// This method is fetching data after component's initial mount
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		// const albumList = this.fetchAlbums(this.state.startIndex);
		this.props.getAlbumData(ALBUM_DATA_URL);
		// this.setState({
		// 	albumList
		// });
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if(nextProps.albumData !== prevState.albumData) {
			return { albumData: nextProps.albumData};
		}
		return null; 
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.albumData !== this.props.albumData){
			const albumList = this.fetchAlbums(this.state.startIndex);
			this.setState({
				albumList
			});
	
		}
	}

	// This method will remove the scroll event listener before component unmount
	componentWillUnmount() {
		document.removeEventListener('scroll', this.handleScroll);
	}

	// This method is responsible for fetching album data
	// parameters: startIndex = From where it will start fetching
	fetchAlbums(startIndex) {
		let {albumList} = this.state;
		let albumRow = [];
		const numberOfRowFetch = 90;
		const numberOfAlbumsEachRow = 5;
		const endIndex = startIndex + Math.min(numberOfRowFetch, this.state.albumData.length - startIndex);
		for(let i=startIndex; i<endIndex; i++) {
			const album = this.state.albumData[i];
			albumRow.push(
				<Card 
					key={i}
					className="album card"
					onClick={() => this.handleAlbumClick(album)}
				>
					<CardActionArea>
						<CardMedia
							className="album media"
							image={album.thumbnailUrl}
							title={album.title}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{`Album ${(i+1)}`}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{_startCase(_toLower(album.title))}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			)
			if((i + 1) % numberOfAlbumsEachRow === 0) {
				albumList.push(
					<Flex
						key={(i + 1) / numberOfAlbumsEachRow}
						w={1}
						pt={2}
						justify='space-evenly'
					>
						{albumRow.map(row => {
							return row;
						})}
					</Flex>
				);
				albumRow = [];
			}
		}
		// to push the remianing elements from albumList into albumRow
		if(albumRow.length > 0) {
			albumList.push(
				<Flex
					key={endIndex / numberOfAlbumsEachRow}
					w={1}
					pt={2}
					justify='space-evenly'
				>
					{albumRow.map(row => {
						return row;
					})}
				</Flex>
			);
		}
		this.setState({
			startIndex: endIndex
		});
		return albumList;
	}

	// This method is fetching more row if user is at the bottom of the page
	// by handning scrolling scrolling event
	handleScroll(e) {
		const wrappedElement = document.getElementById('album-container');
		if (this.isBottom(wrappedElement)) {
			const albumList = this.fetchAlbums(this.state.startIndex);
			this.setState({
				albumList
			});
		}
	}

	// This Method is to determine if user hit the bottom of the page by scrolling
	isBottom(el) {
		// This method is Returning true before 200px of hitting bottom
		// so it can prefetch data without impacting user experience
		return el.getBoundingClientRect().bottom - 200 <= window.innerHeight;
	}

	// This method handles album on click event
  handleAlbumClick(album) {
    console.log('i came here');
    console.log(album);
	}

	render() {
		// console.log('from render');
		// console.log(this.props.albumData);
		// console.log(this.state.albumList);
		return (
			<div id="album-container" onScroll={this.handleScroll}>
				{this.state.albumList}
		 	</div>
		);
	}
}