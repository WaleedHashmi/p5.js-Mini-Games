function Bird(){
    this.r = 32;            // radius
    this.y = height/2;
    this.x = 100;
    this.g = .5;
    this.v = 0;
    this.v_max = -10;
    
    this.show = function(){
        fill (255);
        ellipse (this.x,this.y,this.r,this.r);
    }
    
    
    this.update = function () {
        this.y += this.v;
        this.v += this.g;
              
        // Stopping the character from escaping from the below of the screen
        if (this.y >= height - this.r/2){
            this.y = height - this.r/2;
            this.v = 0;
        };
        
        // Stopping the character from escaping from the top of the screen
        
        if (this.y <= this.r/2){ 
            this.y = this.r/2;
            this.v = this.g  ;
        };
        
        //limiting max velocity
        if (this.v < this.v_max){
            this.v = this.v_max;
        }
    }
    
    this.up = function() {
        this.v -= 25;   
    }

}

function Pipe(){
    this.pos = random(200,height-200);
    this.offset = 100
    this.top = this.pos - this.offset;
    this.bottom = this.pos + this.offset;
    this.x = width;  // first x coordinate
    this.w = 20;
    this.v = 2   ;
    
    this.show = function(){
        fill(255);
        rect(this.x,0,this.w,this.top);
        rect(this.x,this.bottom,this.w,height-this.bottom);
    }
    
    this.update = function(){
        this.x -= this.v ;
    }

}
  
var bird;
var pipes = [];

function setup(){
    createCanvas (700,1000); 
    bird = new Bird; 
    pipes.push (new Pipe);
}

function draw() {
    background (0);
    bird.show();  
    bird.update();
    
    if (frameCount % 150 == 0) {
        pipes.push (new Pipe);
    }
    
//    rect(100,0,20,300);
//    rect(100,500,20,height-500);
    
    for (var i = 0; i<pipes.length; i++){
        pipes[i].update();
        pipes[i].show();
    }
    
}

function keyPressed() {
    if (key == " "){
        bird.up();
    }
}