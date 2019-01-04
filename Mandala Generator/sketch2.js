var mandalaSize = 800;
var m = new mandala;

function mandala(){
    this.nSegments = 4;
    this.size = 3;
    this.line = []
    this.isDrawing = false;
    
    this.display = function(){
        fill(240,240,240); 
        noStroke();
        ellipse (height/2,width/2,height,width); 
        this.draw();
    }
     
    this.draw = function(){
        for (var i=0; i<this.line.length; i++){
            fill(0);
            ellipse(this.line[i][0],this.line[i][1],this.size,this.size);
        }

        if (this.isDrawing && (dist(mouseX,mouseY,height/2,width/2)<mandalaSize/2)){
            this.line.push([mouseX,mouseY]); 
        }
        console.log(this.line); 
    }
}
  


function setup(){
    createCanvas (mandalaSize,mandalaSize);
} 

function draw() {
    background (255,255,255);
    m.display();
    
    
}


function mousePressed() {
    if (dist(mouseX,mouseY,height/2,width/2)<mandalaSize/2){
        if (m.isDrawing){
            m.isDrawing = false;
        } else{
           m.isDrawing = true;
        }
    }  

}


