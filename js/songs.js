/////////////////////////////
///   Global Variables    ///
/////////////////////////////

let allMusic = {};

// DOM variables
let songPanel = $("#musicDiv");
songPanel.html('');

// buttons
    // move to function and call when music is added
let deleteRowButtons;
let addMusicButton = $("#moreMusicButton");


/////////////////////////////
/////     Functions     /////
/////////////////////////////

// merge all music together (original5Music + add2Music)
// function combineMusic() {
//     allMusic = original5Music;
//     allMusic.music.unshift(add2Music.music[0]);
//     allMusic.music.push(add2Music.music[1]);
//     writeToHTML();
// }

function addUserMusic() {
    if (userAddedMusic !== undefined) {
        newHTML +=
            `
            <div>
                <h2 class='dark-yellow'>${userAddedMusic.Song}</h2>
                <div class='musicRowButton'>
                    <h4 class='topMargin'>${userAddedMusic.Artist} | ${userAddedMusic.Album} | ${userAddedMusic.Genre}</h4>
                    <button class='deleteRowButton'>Delete</button>
                </div>
            <div>
            `;
    }
    songPanel.html(newHTML)
    getDeleteRowButtons();
}

// GET THE DELETE ROW BUTTONS
    // ADD EVENT LISTENER TO THE BUTTONS
    // DELETE THE ROWS WHEN BUTTON IS PRESSED

function getDeleteRowButtons() {
    deleteRowButtons = $('.deleteRowButton');
    deleteRowListener();
}

function deleteRowListener() {
    // When delete button is pressed for the row then delete the entire row
        // for loop to add event listener to each button
    deleteRowButtons.click(deleteRow)
}

function deleteRow(e) {
    let button = e.target.parentNode.parentNode;
    button.remove();
}


///////////////////////////////////
/////     Event Listeners     /////
///////////////////////////////////

addMusicButton.on('click', add2MusicHTML);
