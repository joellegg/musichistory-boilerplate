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
let original5Music;
let add2Music;
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
        songs.push(addSong + ' - by ' + addArtist + ' on the album ' + addAlbum)
    };
    // write variables to the DOM
    cleanUpSongs();
})

/////////////////////////////
/////     Functions     /////
/////////////////////////////



// 3.
function musicToParse(e) {
    original5Music = JSON.parse(e.target.responseText);
    loadJSON(categoriesToParse, 'categories.json');
}
// 5.
function categoriesToParse(e) {
    add2Music = JSON.parse(e.target.responseText);
    // function to run next
}

/////////////////////////////
////    XMLR request    /////
/////////////////////////////

// 1. This function will use the loadJSON function to load the json file and then run function musicToParse
loadJSON(musicToParse, 'music.json');

// 2., 4.
function loadJSON (functionToRun, jsonFile) {
    var newRequest = new XMLHttpRequest();
    newRequest.addEventListener('load', functionToRun);
    newRequest.open("GET", jsonFile);
    newRequest.send();
}
