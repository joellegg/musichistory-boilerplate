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
  addSong = $('#songName').val();
  addArtist = $('#artistName').val();
  addAlbum = $('#albumName').val();
  addGenre = $('#genreName').val();
  // if any fields are blank display alert
  // else add songs to the array of songs
  if (addSong === "" || addArtist === "" || addAlbum === "" || addGenre === "") {
    alert('You must enter all fields');
  } else {
    userAddedMusic = {
      "Song": addSong,
      "Artist": addArtist,
      "Album": addAlbum,
      "Genre": addGenre
    }
  };
  // write variables to the DOM
  addUserMusic();
})

/////////////////////////////
/////     Functions     /////
/////////////////////////////

let newHTML = '';

function original5ToHTML() {
  for (var i = 0; i < original5Music.music.length; i++) {
    newHTML +=
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
  songPanel.html(newHTML)
  getDeleteRowButtons();

}

//load add2Music when the more button is pressed
function add2MusicHTML() {
  console.log('music button clicked')
  let addMusicHTML = '';
  for (var i = 0; i < add2Music.music.length; i++) {
    addMusicHTML +=
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
  songPanel.append(addMusicHTML)
  getDeleteRowButtons();
}


/////////////////////////////
////    XMLHR request   /////
/////////////////////////////

$.getJSON('JSON/music.json', function(data) {
  original5Music = data;
  original5ToHTML();
});

$.getJSON('JSON/music2.json', function(data) {
  add2Music = data;
});
