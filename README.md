const library = { // Defines an object called 'library' to hold tracks and playlists
  tracks: { // 'tracks' property contains all the tracks in the library
    t01: { // Each track has an id, name, artist, and album
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
  playlists: { // 'playlists' property contains all the playlists in the library
    p01: { // Each playlist has an id, name, and a list of track ids
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

  // Method to print all playlists
  printPlaylists: function () {
    for (let playlistId in this.playlists) { // Loop through each playlist
      const playlist = this.playlists[playlistId]; // Access the current playlist
      console.log(`${playlist.id} - ${playlist.name} - ${playlist.tracks}`) // Print the playlist details
    }
  },

  // Method to print all tracks
  printTracks: function () {
    for (let trackId in this.tracks) { // Loop through each track
      const track = this.tracks[trackId]; // Access the current track
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album}) `) // Print the track details
    }
  },

  // Method to print a specific playlist with its tracks
  printPlaylist: function (playlistId) {
    const playlist = this.playlists[playlistId]; // Access the specified playlist
    console.log(`${playlist.id} - ${playlist.name} - ${playlist.tracks}`) // Print the playlist details

    for (let trackId of playlist.tracks) { // Loop through each track id in the playlist
      const track = this.tracks[trackId]; // Access the track using the track id
      console.log(`${track.id} - ${track.name} by ${track.artist} (${track.album})`) // Print the track details
    }
  },

  // Method to add a track to a playlist
  addTrackToPlaylist: function (trackId, playlistId) {
    const playlist = this.playlists[playlistId]; // Access the specified playlist
    const track = this.tracks[trackId]; // Access the specified track

    playlist.tracks.push(trackId); // Add the track id to the playlist's tracks
    console.log(`Track ${trackId}: ${track.name} by ${track.artist} added to ${playlistId}`) // Print a message confirming the addition
  },

  // Method to generate a unique id
  generateUid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); // Generate a random 4-digit hexadecimal string
  },

  // Method to add a new track to the library
  addTrack: function (name, artist, album) {
    const id = this.generateUid(); // Generate a unique id for the new track
    this.tracks[id] = { id, name, artist, album }; // Add the new track to the 'tracks' object
    console.log(`Added with ID '${id}': ${name} by ${artist} ${album}`); // Print a message confirming the addition
  },

  // Method to add a new playlist to the library
  addPlaylist: function (name) {
    const id = this.generateUid(); // Generate a unique id for the new playlist
    this.playlists[id] = { id, name, tracks: [] }; // Add the new playlist to the 'playlists' object with an empty tracks list
    console.log(`Playlist ${name} with id '${id}' added`); // Print a message confirming the addition
  },

}; // End of the 'library' object definition
