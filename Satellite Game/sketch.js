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
    
    this.checkCollision = function(){
        for (var i = 0; i<pipes.length; i++){
           if (collideRectCircle(pipes[i].x,0,pipes[i].w,pipes[i].top,this.x,this.y,this.r) || collideRectCircle(pipes[i].x,pipes[i].bottom,pipes[i].w,height-pipes[i].bottom,this.x,this.y,this.r)){
               game.state='new';
           }        
        }
    }
    
    this.update = function () {
        this.checkCollision();
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

function Game(){
    this.state = 'new';
    
    this.newGame = function(){
        pipes = [];     
        textFont(font);
        textSize(40);
        textAlign(CENTER);
        fill(100);
        fill(255); 
        text("Not Flappy Bird", width/2, 280);
        textSize(20);
        text("A flappy bird inspired game", width/2, 310);   
        text("Hit spacebar to start", width/2, 600);      
    }
    
    this.score = function(){
        if (pipes.length - 3 >0){             
            textFont(font);
            textSize(40);
            fill(100);
            fill(255); 
            text(pipes.length-3, width/2, 40);   
        }
    }
}
  
var game;
var font;
var bird;
var pipes = [];

function preload(){
    font = loadFont('Gotham-Light.otf');
}

function setup(){
    createCanvas (1280,720); 
}

function draw() {
    background (0);

}

//function keyPressed() {
//
//} 

