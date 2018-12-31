function preload(){
    data = loadJSON("http://api.openweathermap.org/data/2.5/weather?APPID=b0072628d0a256c875e8bc9fcb13620d&q=Lahore")
}


function setup(){
    // setting the canvas dimensions to the dimensions 
    // of the window
    createCanvas (innerWidth,innerHeight); 
}

function draw() {
    background (0);
}
