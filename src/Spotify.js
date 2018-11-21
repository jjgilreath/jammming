const accessToken = '';
const clientId = '4e6aab7481cb486fb3b2cc9f0041f399';
const redirectURI='http://localhost:3000/';
const timeoutId;

let Spotify = {
};

getAccessToken() {
	if (accessToken !== '') {
		return accessToken;
	accessToken = window.location.href.match(/access_token=([^&]*)/);
	const expiresIn = window.location.href.match(/expires_in=([^&]*)/);
	if (accessToken !== null && expiresIn !== null) {
		timeoutId = window.setTimeout(() => accessToken = '', expiresIn * 1000);
		window.history.pushState('Access Token', null, '/');
	}
	// HELP! Where/how do I get a URL from Spotify
	// What is "accessToken" giving me access to?

}

export Spotify
