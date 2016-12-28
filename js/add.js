/////////////////////////////
///   Global Variables    ///
/////////////////////////////

// variables
let original5Music;
let add2Music;
let userAddedMusic;

// input fields
let addSong;
let addArtist;
let addAlbum;
let addGenre;

// buttons or links
let addLink = $("#link-add");
let addView = $("#add-view");
let addSongButton = $('#addSong');


///////////////////////////
///   Event Listeners   ///
///////////////////////////

// Change sections
addLink.click(function() {
    //console.log('this was clicked')
    listView.addClass("hidden");
    addView.addClass("visible");
    addView.removeClass("hidden");
});

// Get inputs when the button is pressed
addSongButton.click(function() {
    addSong = $('#songName')[0].value;
    addArtist = $('#artistName')[0].value;
    addAlbum = $('#albumName')[0].value;
    addGenre = $('#genreName')[0].value;
    // if any fields are blank display alert
    // else add songs to the array of songs
    if (addSong === "" || addArtist === "" || addAlbum === "" || addGenre === "") {
        alert('You must enter all fields');
    } else {
        userAddedMusic = {
            "Song": addSong,
            "Artist": addArtist,
            "Album": addAlbum,
            "Genre": addGenre}
    };
    // write variables to the DOM
    addUserMusic();
})

/////////////////////////////
/////     Functions     /////
/////////////////////////////

function original5ToHTML() {
    songPanel.innerHTML = '';
    for (var i = 0; i < original5Music.music.length; i++) {
        songPanel.innerHTML +=
            `
            <div>
                <h2 class='dark-yellow'>${original5Music.music[i].Song}</h2>
                <div class='musicRowButton'>
                    <h4 class='topMargin'>${original5Music.music[i].Artist} | ${original5Music.music[i].Album} | ${original5Music.music[i].Genre}</h4>
                    <button class='deleteRowButton'>Delete</button>
                </div>
            </div>
            `;
    }
    getDeleteRowButtons();

}

//load add2Music when the more button is pressed
function add2MusicHTML() {
    for (var i = 0; i < add2Music.music.length; i++) {
        songPanel.innerHTML +=
            `
            <div>
                <h2 class='dark-yellow'>${add2Music.music[i].Song}</h2>
                <div class='musicRowButton'>
                    <h4 class='topMargin'>${add2Music.music[i].Artist} | ${add2Music.music[i].Album} | ${add2Music.music[i].Genre}</h4>
                    <button class='deleteRowButton'>Delete</button>
                </div>
            </div>
            `;
    }
    getDeleteRowButtons();
}

// 3.
function musicToParse(e) {
    original5Music = JSON.parse(e.target.responseText);
    loadJSON(music2ToParse, 'JSON/music2.json');
}
// 5.
function music2ToParse(e) {
    add2Music = JSON.parse(e.target.responseText);
    original5ToHTML();
}

/////////////////////////////
////    XMLHR request   /////
/////////////////////////////

// 1. This function will use the loadJSON function to load the json file and then run function musicToParse
loadJSON(musicToParse, 'JSON/music.json');

// 2., 4.
function loadJSON (functionToRun, jsonFile) {
    var newRequest = new XMLHttpRequest();
    newRequest.addEventListener('load', functionToRun);
    newRequest.open("GET", jsonFile);
    newRequest.send();
}
