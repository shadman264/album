import React, { Component } from 'react';
import data from './Album.mock';
import {Flex, Box} from 'reflexbox';

export default class Album extends Component {
	constructor() {
		super();
		this.state = {
			albumData: data
		}
	}

	componentDidMount() {
		// let albumTable = null;
		// let albumRow = null;
		// data.map((album, index) => {
		// 	if(index !== 0 && index % 3 === 0) {
		// 		albumTable.push(
		// 			<Flex w={1}>
		// 				{albumRow}
		// 			</Flex>
		// 		);
		// 		albumRow = null;
		// 	} else{
		// 		albumRow.push(
		// 			<Box w={1/3}>
		// 				<img src={album.thumbnailUrl} alt="thumbnail"/>
		// 			</Box>
		// 		)
		// 	}
		// })
	}

	render() {
		// const albumThumbnails = data.map(album => {
		// 	return (
		// 		<img src={album.thumbnailUrl} alt="thumbnail"/>
		// 	)
		// })
		let albumTable = [];
		let albumRow = [];
		data.map((album, index) => {
			albumRow.push(
				<Box>
					<img src={album.thumbnailUrl} alt="thumbnail"/>
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
		return(
			<div>
				{albumTable}
			</div>			
		)
	}
}