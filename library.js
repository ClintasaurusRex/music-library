const { add } = require("lodash");

const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (let playlistId in library.playlists) { // loop through
    const playlist = library.playlists[playlistId]; // create variable for objectacces
    console.log(`${playlist.id} - ${playlist.name} - ${playlist.tracks}`)
  }
};
printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {

  for (let tracks in library.tracks) {
    const track = library.tracks[tracks];
    
    console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album}) `)
  }


}
printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003) 
const printPlaylist = function(playlistId) {
  const playlist = library.playlists[playlistId];
  console.log(`${playlist.id} - ${playlist.name} - ${playlist.tracks}`)
   
    for (let tracks of playlist.tracks) {
    const track = library.tracks[tracks]; 
    console.log(`${track.id} - ${track.name} by ${track.artist} (${track.album})`)
  }
};

printPlaylist("p01");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const playlist = library.playlists[playlistId];
  const track = library.tracks[trackId];
  
  playlist.tracks.push(trackId);
  console.log(`Track ${trackId}: ${track.name} by ${track.artist} added to ${playlistId}`)

}
addTrackToPlaylist('t01', 'p01');

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  const id = generateUid();
  library.tracks[id] = {id, name, artist, album};
  console.log(`Added with ID '${id};: ${name} by ${artist} ${album}`);
}

addTrack("Tribute", "Tenacious D", "The Pick Of Destiny");
// adds a playlist to the library
const addPlaylist = function(name) {
  const id = generateUid();
  console.log(`Playlist ${name} with id ${id} added`);
};
addPlaylist("My New Playlist");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}