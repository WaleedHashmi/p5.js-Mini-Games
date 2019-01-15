var mandalaSize = 800;
var m = new mandala;
var pi = 333/106;

function mandala(){
    this.size = 5;  
    this.nSegments = Math.pow(2, this.size);   
    this.curves = [];
    this.line = []
    this.isDrawing = false;
    
    this.display = function(){
        //Background: Grey Circle at the background
        fill(240,240,240); 
        noStroke();
        ellipse (height/2,width/2,height,width);  
        
        
        //Reset before drawing curves
        noFill();
        stroke(0); 
        
        //drawing the curve (part 1. drawing stored curves)
        for (var i=0; i<this.curves.length; i++){
            beginShape();
            for (var j=0; j<this.curves[i].length; j++){
                curveVertex(this.curves[i][j][0],this.curves[i][j][1]);
            }
            endShape(); 
        }
       
        // part 2. drawing the curve not stored in this.curves
        beginShape();
        for (var i=0; i<this.line.length; i++){
            curveVertex(this.line[i][0],this.line[i][1]);
        }
        endShape();   
        
        
        // Foreground: Mandala Lines
        noStroke();
        fill(150);     
                
        translate(width / 2, height / 2);

        for (var i = 0; i<this.nSegments/2; i++){
            rotate ((2*pi/this.nSegments)*i);
            rect(0, 0, width, 1); 
        }
    }
    
    
    this.draw = function(){
        if (this.isDrawing && (dist(mouseX,mouseY,height/2,width/2)<mandalaSize/2)){
            this.line.push([mouseX,mouseY]); 
        }
        
        if (!this.isDrawing && this.line.length>1){
            this.curves.push(this.line);
            this.line = [];
        }
    } 
}
  


function setup(){
    createCanvas (mandalaSize,mandalaSize);
    rectMode(CENTER);

                  
} 

function draw() {
    background (255,255,255);
    m.draw();
    m.display();
}


function mousePressed() {
    if (dist(mouseX,mouseY,width/2,height/2)<mandalaSize/2){
        if (m.isDrawing){
            m.isDrawing = false;
        } else{
           m.isDrawing = true;
        }
    }  

}


