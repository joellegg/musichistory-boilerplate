/////////////////////////////
///   Global Variables    ///
/////////////////////////////

let allMusic = {};

// DOM variables
var songPanel = document.getElementsByClassName("box right_section")[0];
songPanel.innerHTML = "";


/////////////////////////////
/////     Functions     /////
/////////////////////////////

// merge all music together (original5Music + add2Music)
function combineMusic() {
    allMusic = original5Music;
    allMusic.music.unshift(add2Music.music[0]);
    allMusic.music.push(add2Music.music[1]);
    writeToHTML();
}

function addUserMusic() {
    if (userAddedMusic !== undefined) {
        songPanel.innerHTML +=
            `
            <h2 class='dark-yellow'>${userAddedMusic.Song}</h2>
            <div class='inlineFlex'>
                <h4 class='topMargin'>${userAddedMusic.Artist} | ${userAddedMusic.Album} | ${userAddedMusic.Genre}</h4>
            </div>
            `;
    }
}

function writeToHTML() {
    songPanel.innerHTML = '';
    for (var i = 0; i < allMusic.music.length; i++) {
        songPanel.innerHTML +=
            `
            <h2 class='dark-yellow'>${allMusic.music[i].Song}</h2>
            <div class='inlineFlex'>
                <h4 class='topMargin'>${allMusic.music[i].Artist} | ${allMusic.music[i].Album} | ${allMusic.music[i].Genre}</h4>
            </div>
            `;
    }
}

// extra functions no longer in use

// function cleanUpSongs() {
//     // Loop over the array and remove any words or characters that obviously don't belong.
//     // Replace the > character in each item with a - character
//     for (var i = 0; i < songs.length; i++) {
//         songs[i] = songs[i].replace(/\*|\@|\!|\(/gi, '');
//         songs[i] = songs[i].replace('>', '-')
//     }
//     writeToHTML();
// }

// removed from write to HTML function
        // var song = songs[i];
        // song = song.split(/\s-\sby\s|\son\sthe\salbum\s/);
