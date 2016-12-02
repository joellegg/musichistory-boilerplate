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
    songs[i] = songs[i].replace(/\*|\@|\!/gi, '');
    songs[i] = songs[i].replace('>', '-')
}

// Must add each string to the DOM in index.html in the main content area
var songPanel = document.getElementsByClassName("box right_section")[0];
songPanel.innerHTML = "";
for (var i = 0; i < songs.length; i++) {
    var p = document.createElement('p');
    p.className = i;
    p.innerHTML = songs[i];
    console.log(p);
    songPanel.appendChild(p);
}


console.log(songs);
