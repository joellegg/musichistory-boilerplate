# Music History Part 1

1. Create five options for the artist select element of any artist that you enjoy.
1. Create at least five options for the album select element. One, or more, album for each artist.
1. The links in the navigation bar don't need to link to anything just yet, you can use `<a href="#">View music</a>` for now
1. Pick your four favorite songs from the artists you have chosen and use the information for each in the list that's on the right-hand side. You can use `h1` tags, `div` tags, `section` tags... whatever you like.

# Music History Part 2

1. Each student must add one song to the beginning and the end of the array.
1. Loop over the array and remove any words or characters that obviously don't belong.
1. Students must find and replace the > character in each item with a - character.
1. Must add each string to the DOM in index.html in the main content area.

# Music History Part 3

1. In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
1. Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere.
1. Add a <button> element at the bottom of the input fields labeled "Add".
1. The input fields and the add button make up the Add Music View.
1. The existing view - the combination of the filter form and the song list - will be referred to as the List Music View.
1. The Add Music View should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
1. When the user clicks on "Add Music" in the navigation bar, the List Music View should be hidden, and the Add Music View should be shown (see example wireframe).
1. When the user clicks on "List Music" in the navigation bar, the Add Music View should be hidden, and the List Music View should be shown (see example wireframe).
1. Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

# Music History Part 4

## Part One

1. Read from local JSON file with an XHR.
1. Loop over results and inject into Music History list view.
1. Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM.

## Part Two

1. Take your music and split it into two JSON file instead of them all living on one file.
1. Add a button at the bottom of your music list and label it "More >".
1. Load the songs from the first list and inject the DOM into the document as you've already done.
1. When the user clicks the more button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.
