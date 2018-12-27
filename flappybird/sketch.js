function Bird(){
    this.r = 32;            // radius
    this.y = height/2;
    this.x = 100;
    this.g = .3 ;
    this.v = 0;  
    
    this.show = function(){
        fill (255);
        ellipse (this.x,this.y,this.r,this.r);
    }
    
    
    this.update = function () {
        this.y += this.v;
        this.v += this.g;
        
        if (this.y >= height - this.r/2){
            this.y = height - this.r/2;
            this.v = 0;
        };
        

        if (this.y <= this.r/2){
            this.y = this.r/2;
            this.v = this.g  ;
        };
        
    }
    
    this.up = function() {
        this.v -= 15  ;   
    }

}
  
var bird;

function setup(){
    createCanvas (700,1000); 
    bird = new Bird; 
}

function draw() {
    background (0);
    
    bird.update();
    bird.show();  
}

function keyPressed() {
    if (key == " "){
        bird.up();
    }
}