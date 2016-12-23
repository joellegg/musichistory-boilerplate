var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array.
songs.unshift("Stay Alive > by Jose Gonzalez on the album The Secret Life of Walter Mitty");
songs.push("All My Days > by Alex Murdoch on the album Time Without Consequence");

// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character
for (var i = 0; i < songs.length; i++) {
    songs[i] = songs[i].replace(/\*|\@|\!|\(/gi, '');
    songs[i] = songs[i].replace('>', '-')
}

// Must add each string to the DOM in index.html in the main content area
var songPanel = document.getElementsByClassName("box right_section")[0];
songPanel.innerHTML = "";

for (var i = 0; i < songs.length; i++) {
    var song = songs[i];
    song = song.split(/\s-\sby\s|\son\sthe\salbum\s/);
    // song[0] = song title; song[1] = artist; song[2] = album
    // Song Title
        // <div className = "inlineMusic">
            //   <h4>Artist | Album | Genre</h4>
        // </div>
    // h2 to hold song title
    var h2 = document.createElement('h2');
    h2.className = "dark-yellow";
    h2.innerHTML = song[0];
    songPanel.appendChild(h2);

    // create div to hold artist album and genre
    var iDiv = document.createElement('div');
    // assign class name
    iDiv.className = ("inlineMusic");
    // append iDiv to the right section
    songPanel.appendChild(iDiv);

    // create h4 element
    var artistAlbumGenre = document.createElement('h4');
    // change inner HTML to show artist and album
    artistAlbumGenre.innerHTML = song[1] + " | " + song[2];
    // append h4 with new HTML to the iDiv
    iDiv.appendChild(artistAlbumGenre);
}
