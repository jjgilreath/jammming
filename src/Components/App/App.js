import React, { Component } from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import { Track } from '../Track/Track';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: [
				{
					name: 'Hotel California',
					artist: 'Eagles',
					album: 'Hotel California',
					id: '1',
					uri: 'A'
				},
				{
					name: 'Money for Nothing',
					artist: 'Dire Straits',
					album: 'Brothers in Arms',
					id: '2',
					uri: 'B'
				}
			],
			playlistName: 'Mighty Mighty Playlist',
			playlistTracks: [
				{
					name: 'Comfortably Numb',
					artist: 'Pink Floyd',
					album: 'The Wall',
					id: '3',
					uri: 'C'
				},
				{
					name: 'Bohemian Rhapsody',
					artist: 'Queen',
					album: 'A Night at the Opera',
					id: '4',
					uri: 'D'
				}
			]
		}
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
		this.updatePlaylistName = this.updatePlaylistName.bind(this);
		this.savePlaylist = this.savePlaylist.bind(this);
		this.search = this.search.bind(this);
	}
	
	addTrack(track) {
		if (this.state.playlistTracks.find(trk => trk.id === track.id)) {
			return;
		}
		let tracks = this.state.playlistTracks;
		tracks.push(track);
		this.setState({playlistTracks: tracks});
	}

	removeTrack(track) {
		const tracks = this.state.playlistTracks.filter(trk => trk.id !== track.id);
		this.setState({playlistTracks: tracks});
	}

	updatePlaylistName(name) {
		this.setState({playlistName : name});
	}
	
	savePlaylist() {
		const trackURIs = this.state.playlistTracks.map(track => track.uri);
	}
	
	search(searchTerm) {
		console.log(searchTerm);
	}

  render() {
    return (
			<div>
  			<h1>Ja<span className="highlight">mmm</span>ing</h1>
  			<div className="App">
					<SearchBar onSearch={this.search} />
    			<div className="App-playlist">
						<SearchResults
							searchResults={this.state.searchResults}
							onAdd={this.addTrack}
						/>
						<Playlist
						  playlistName={this.state.playlistName}
							playlistTracks={this.state.playlistTracks}
							onRemove={this.removeTrack}
							onNameChange={this.updatePlaylistName}
							onSave={this.savePlaylist}
						/>
					</div>
				</div>
			</div>
    );
  }
}

export default App;
