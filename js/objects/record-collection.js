/* 
Build a Record Collection

You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. Not all albums have complete information.

User Stories:

https://www.freecodecamp.org/learn/javascript-v9/lab-record-collection/build-a-record-collection

*/

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

/**
 * Helper function to update album records
 *
 * @param {object} records  an object containing several individual albums
 * @param {integer} id a number representing a specific album in the records object
 * @param {string} prop contains the name of the album’s property to update
 * @param {string} value contains the information used to update the album’s property
 * @returns
 */
function updateRecords(records, id, prop, value) {
  const album = records[id];
  // Skip missing album
  if (!album) return records;

  if (value === "") {
    delete album[prop];
  } else if (prop !== "tracks") {
    album[prop] = value;
  } else {
    // prop must be "tracks"
    album.tracks = album.tracks || [];
    album.tracks.push(value);
  }

  return records;
}
