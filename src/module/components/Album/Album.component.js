import React, { Component } from 'react';
// import data from './Album.mock';
import {Flex} from 'reflexbox';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {ALBUM_DATA_URL} from './Album.constants';

export default class Album extends Component {
	constructor() {
    super();
		this.handleAlbumClick = this.handleAlbumClick.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.handleAddAlbumClick = this.handleAddAlbumClick.bind(this);
		this.state = {
			albumData: [],
			data: [],
			albumList: [],
			startIndex: 0,
			activeAlbum: null,
			filterAlbumTitle: '',
			newAlbum: {}
		}
	}
	
	// This method is fetching data after component's initial mount
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		if(this.props.albumData.length === 0)
			this.props.getAlbumData(ALBUM_DATA_URL);
		else{
			const filteredAlbumData = this.props.albumData.filter(album => {
				return album.title.toLowerCase().includes(this.props.filterAlbumTitle.toLowerCase())
			});
			this.setState({ 
				albumData: filteredAlbumData,
				filterAlbumTitle: this.props.filterAlbumTitle,
				albumList: [],
				startIndex: 0
			}, () => {
				const albumList = this.fetchAlbums(this.state.startIndex);
				this.setState({
					albumList
				});
			});
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if(nextProps.albumData.join("") !== prevState.data.join("")) {
			const filteredAlbumData = nextProps.albumData.filter(album => {
				return album.title.toLowerCase().includes(prevState.filterAlbumTitle.toLowerCase())
			});
			return { 
				albumData: filteredAlbumData,
				data: nextProps.albumData,
				albumList: [],
				startIndex: 0
			};
		} else if(nextProps.filterAlbumTitle !== prevState.filterAlbumTitle) {
			const filteredAlbumData = prevState.data.filter(album => {
				return album.title.toLowerCase().includes(nextProps.filterAlbumTitle.toLowerCase())
			});
			return { 
				albumData: filteredAlbumData,
				filterAlbumTitle: nextProps.filterAlbumTitle,
				albumList: [],
				startIndex: 0
			};
		}
		return null; 
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.albumData !== this.props.albumData || prevProps.filterAlbumTitle !== this.props.filterAlbumTitle){
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
		const numberOfAlbumsFetch = 120;
		const numberOfAlbumsEachRow = 6;
		const endIndex = startIndex + Math.min(numberOfAlbumsFetch, this.state.albumData.length - startIndex);
		for(let i=startIndex; i<endIndex; i++) {
			const album = this.state.albumData[i];
			albumRow.push(
				<Grow key={album.id} in={true}>
					<Card 
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
									{`Album ${album.albumId}`}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grow>
			)
			if((i + 1) % numberOfAlbumsEachRow === 0) {
				let paddingBottom = 0;
				if((i + 1) === endIndex) {
					paddingBottom = 3;
				}
				albumList.push(
					<Flex
						key={(i + 1) / numberOfAlbumsEachRow}
						w={1}
						pt={3}
						pb={paddingBottom}
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
					pb={3}
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

	addAlbum() {

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
		if(el) {
			return el.getBoundingClientRect().bottom - 200 <= window.innerHeight;
		}
		return false;
	}

	// This method handles album on click event
  handleAlbumClick(album) {
		this.props.getAlbumDetails(album);
		this.props.history.push("/details")
	}

	handleAddAlbumClick() {
		this.props.history.push("/add");
	}
 
	render() {
		return (
			<div>
				<div id="album-container" onScroll={this.handleScroll}>
					{this.state.albumList}
				</div>
				<div className='add-album-button' onClick={this.handleAddAlbumClick}>
					<Fab size="large" color="secondary" aria-label="Add">
						<AddIcon />
					</Fab>
				</div>
		 	</div>
		);
	}
}