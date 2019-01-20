function preload(){
    font = loadFont('Gotham-Light.otf');
    
    //screens
    main = loadImage ('images/main.png');
    city = loadImage ('images/city.png');
    hurricane = loadImage ('images/hurricane.png');
    game_screen = loadImage ('images/game_screen.png');
    gameover_screen = loadImage ('images/gameover_screen.png');

    
    
    //info box
    info = loadImage ('images/info-box.png');

    //timer icons
    icon_city = loadImage ('images/icon_city.png');
    icon_hurricane = loadImage ('images/icon_hurricane.png');

    //rocket
    base = loadImage ('images/base.png');
    rockets = loadImage ('images/rockets.png');
    spacecraft = loadImage ('images/spacecraft.png');
    fuelsage = loadImage ('images/fuelsage.png');    
}

function setup(){
    var cnv = createCanvas(1280, 720);
    cnv.parent("canvas-holder");
    g = new game(); 
}

function draw() {
    background (0);
    g.update(); 
    g.display();  

}

function keyPressed() {
     
} 

function mousePressed() {
    sControl();
    gameplayControls ();
}