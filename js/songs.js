/////////////////////////////
///   Global Variables    ///
/////////////////////////////

let allMusic = {};

// DOM variables
var songPanel = document.getElementsByClassName("box right_section")[0];
songPanel.innerHTML = "";

// buttons
    // move to function and call when music is added
let deleteRowButtons;


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

function writeToHTML() {
    songPanel.innerHTML = '';
    for (var i = 0; i < allMusic.music.length; i++) {
        songPanel.innerHTML +=
            `
            <div>
                <h2 class='dark-yellow'>${allMusic.music[i].Song}</h2>
                <div class='musicRowButton'>
                    <h4 class='topMargin'>${allMusic.music[i].Artist} | ${allMusic.music[i].Album} | ${allMusic.music[i].Genre}</h4>
                    <button class='deleteRowButton'>Delete</button>
                </div>
            </div>
            `;
    }
    getDeleteRowButtons();
}

function getDeleteRowButtons() {
    deleteRowButtons = document.querySelectorAll('.deleteRowButton')
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
    let button = e.target.parentNode.parentNode.parentNode;
    button.removeChild(e.target.parentNode.parentNode);
}

///////////////////////////////////
/////     Event Listeners     /////
///////////////////////////////////
