/////////////////////////////
///   Global Variables    ///
/////////////////////////////

let allMusic = {};

// DOM variables
var songPanel = document.querySelector("#musicDiv");
songPanel.innerHTML = "";

// buttons
    // move to function and call when music is added
let deleteRowButtons;
let addMusicButton = document.querySelector("#moreMusicButton");


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
        songPanel.innerHTML +=
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
    getDeleteRowButtons();
}

// GET THE DELETE ROW BUTTONS
    // ADD EVENT LISTENER TO THE BUTTONS
    // DELETE THE ROWS WHEN BUTTON IS PRESSED

function getDeleteRowButtons() {
    deleteRowButtons = document.querySelectorAll('.deleteRowButton');
    deleteRowListener();
}

function deleteRowListener() {
    // When delete button is pressed for the row then delete the entire row
        // for loop to add event listener to each button
    for (let i = 0; i < deleteRowButtons.length; i++) {
        deleteRowButtons[i].addEventListener('click', deleteRow);
    }
}

function deleteRow(e) {
    console.log('delete button pressed')
    let button = e.target.parentNode.parentNode.parentNode;
    button.removeChild(e.target.parentNode.parentNode);
}


///////////////////////////////////
/////     Event Listeners     /////
///////////////////////////////////

addMusicButton.addEventListener('click', add2MusicHTML)
