function preload(){
    font = loadFont('Gotham-Light.otf');
    
    //screens
    main = loadImage ('images/main.png');
    city = loadImage ('images/city.png');
    hurricane = loadImage ('images/hurricane.png');
 
    //rocket
    base = loadImage ('images/base.png');
    rockets = loadImage ('images/rockets.png');
    spacecraft = loadImage ('images/spacecraft.png');
    fuelsage = loadImage ('images/fuelsage.png');    
}

function setup(){
    createCanvas (1280,720); 
    g = new game(); 
}

function draw() {
    background (0);
    g.update();
    g.display();
}

function keyPressed() {
    
} 

