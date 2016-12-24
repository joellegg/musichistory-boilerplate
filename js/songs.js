
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array.
songs.unshift("Stay Alive > by Jose Gonzalez on the album The Secret Life of Walter Mitty");
songs.push("All My Days > by Alex Murdoch on the album Time Without Consequence");

/////////////////////////////
///   Global Variables    ///
/////////////////////////////

// Add each string to the DOM
var songPanel = document.getElementsByClassName("box right_section")[0];
songPanel.innerHTML = "";

/////////////////////////////
/////     Functions     /////
/////////////////////////////

// call the function once when page loads. Will run again when songs are added
cleanUpSongs();

function cleanUpSongs() {
    // Loop over the array and remove any words or characters that obviously don't belong.
    // Replace the > character in each item with a - character
    for (var i = 0; i < songs.length; i++) {
        songs[i] = songs[i].replace(/\*|\@|\!|\(/gi, '');
        songs[i] = songs[i].replace('>', '-')
    }
    writeToHTML();
}

function writeToHTML() {
    for (var i = 0; i < songs.length; i++) {
        var song = songs[i];
        song = song.split(/\s-\sby\s|\son\sthe\salbum\s/);

        // song[0] = song title; song[1] = artist; song[2] = album
        songPanel.innerHTML += `
            <h2 class='dark-yellow'>${song[0]}</h2>
            <div class='inlineFlex'>
                <h4 class='topMargin'>${song[1]} | ${song[2]} | Genre</h4>
            </div>`;
    }
}
