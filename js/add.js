var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});

/////////////////////////////
///   Global Variables    ///
/////////////////////////////

let songs = [];
let addSongButton = document.querySelector('#addSong');
let addSong;
let addArtist;
let addAlbum;

///////////////////////////
///   Event Listeners   ///
///////////////////////////

// Get inputs when the button is pressed
addSongButton.addEventListener('click', function() {
    addSong = document.querySelector('#songName').value;
    addArtist = document.querySelector('#artistName').value;
    addAlbum = document.querySelector('#albumName').value;
    // if any fields are blank display alert
    // else add songs to the array of songs
    if (addSong === "" || addArtist === "" || addAlbum === "") {
        alert('You must enter all fields');
    } else {
        songs.push(addSong + ' > by ' + addArtist + ' on the album ' + addAlbum)
    };

    // write variables to the DOM
})

/////////////////////////////
/////     Functions     /////
/////////////////////////////
