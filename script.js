/*
   Name: Jillian Berry
   Class Name: CPSC 322 - Web Development
   Assignment Name: Homeowrk 5
   Last Modified: 10/9/2024
  
*/
// List of additional artworks to add dynamically
        
let timeClicked = 0;
let index = 0;
//startFunction();
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];

//adding event listeners to the first three listeners
document.getElementById("art1").addEventListener('click', function (e) {
            timeClicked++;
            document.getElementById("art1").style.backgroundColor = 'lightgreen';
            document.getElementById("counter").textContent = "Artworks Viewed:" + timeClicked;
});

document.getElementById("art2").addEventListener('click', function (e) {
            timeClicked++;
            document.getElementsByClassName("art-panel")[1].style.backgroundColor = 'lightgreen';
            document.getElementById("counter").textContent = "Artworks Viewed:" + timeClicked;
});

document.getElementById("art3").addEventListener('click', function (e) {
            timeClicked++;
            document.getElementsByClassName("art-panel")[2].style.backgroundColor = 'lightgreen';
            document.getElementById("counter").textContent = "Artworks Viewed: " + timeClicked;
});


//event listeners for the add-art-button
document.getElementById("add-art-button").addEventListener('click', function (e) {
    let colorList = document.querySelector(".art-grid");
    firstart = newArtworks[index]
    
    let myDiv = document.createElement("div")
    myDiv.className = "art-panel"; 
    const newParagraph = document.createElement("p");
    const image = document.createElement("img");
    image.setAttribute("src", firstart.img);
    
    newParagraph.textContent = firstart.title + " by " + firstart.artist; 
    let container = document.querySelector(".art-grid");
    let itemNodes = colorList.querySelectorAll(".art-panel");
    

    myDiv.appendChild(image);
    myDiv.appendChild(newParagraph);
    container.appendChild(myDiv); 
    
    index = index + 1;

    setListener(myDiv);
    

});


//adds the listeners to the new Div
function setListener( el ) {
    // Dynamic elements event listener
    el.addEventListener( 'click', function() {
        timeClicked++;
        el.style.backgroundColor = 'lightgreen';
        document.getElementById("counter").textContent = "Artworks Viewed: " + timeClicked;
    } );
}

    
    //adds the reset button
    document.getElementById("reset-button").addEventListener('click', function (e) { 
        timeClicked = 0;
        document.getElementById("counter").textContent = "Artworks Viewed: " + timeClicked;

        let del = document.querySelectorAll(".art-panel");
        console.log(del)
        for (let i = 0; i < del.length; i++){
            del[i].style.backgroundColor = "#eee";
        }
    });