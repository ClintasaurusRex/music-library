
const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },


  printPlaylists: function () {
    for (let playlistId in this.playlists) { // loop through
      const playlist = this.playlists[playlistId]; // create variable for objectacces
      console.log(`${playlist.id} - ${playlist.name} - ${playlist.tracks}`)
    }
  },
  printTracks: function () {

    for (let tracks in this.tracks) {
      const track = this.tracks[tracks];

      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album}) `)
    }
  },
  printPlaylist: function (playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlist.id} - ${playlist.name} - ${playlist.tracks}`)

    for (let tracks of playlist.tracks) {
      const track = this.tracks[tracks];
      console.log(`${track.id} - ${track.name} by ${track.artist} (${track.album})`)
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    const playlist = this.playlists[playlistId];
    const track = this.tracks[trackId];

    playlist.tracks.push(trackId);
    console.log(`Track ${trackId}: ${track.name} by ${track.artist} added to ${playlistId}`)

  },
  generateUid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    const id = this.generateUid();
    this.tracks[id] = { id, name, artist, album };
    console.log(`Added with ID '${id}': ${name} by ${artist} ${album}`);
  },
  addPlaylist: function (name) {
    const id = this.generateUid();
    console.log(`Playlist ${name} with id '${id}' added`);
  },


};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist('t01', 'p01');
library.addTrack("Tribute", "Tenacious D", "The Pick Of Destiny");
library.addPlaylist("My New Playlist");

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003) 


// adds an existing track to an existing playlist

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)


// adds a track to the library

// adds a playlist to the library

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}