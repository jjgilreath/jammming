import React from 'react';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';

export class Playlist extends React.Component
{
	render() {
		return (
			<div className="Playlist">
				<input DefaultValue={'New Playlist'}/>
				<TrackList tracks={this.props.playlistTracks} />
				<a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		)
	}
};