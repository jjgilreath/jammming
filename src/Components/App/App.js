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
			searchResults: 'Results',
			playlistName: 'The List',
			playlistTracks: [
				{
					name: 'Comfortably Numb',
					artist: 'Pink Floyd',
					album: 'The Wall',
					id: 'JG-1'
				},
				{
					name: 'Bohemian Rhapsody',
					artist: 'Queen',
					album: 'A Night at the Opera',
					id: 'JG-2'
				}
			]
		}
		this.addTrack = this.addTracek.bind(this);
	}
	
	addTrack(track) {
		if (this.state.playlistTracks.find(trk => trk.id === track.id)) {
			return;
		let tracks = this.state.playlistTracks;
		tracks.push(track);
		this.setState.({playlistTracks: tracks});
		}
	}

  render() {
    return (
			<div>
  			<h1>Ja<span className="highlight">mmm</span>ing</h1>
  			<div className="App">
						{/*<!-- Add a SearchBar component -->*/}
    			<div className="App-playlist">
						<SearchResults searchResults={this.state.searchResults} />
						<Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
					</div>
				</div>
			</div>
    );
  }
}

export default App;
