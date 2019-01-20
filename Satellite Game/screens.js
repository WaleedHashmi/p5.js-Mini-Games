function sIntro() {
    
    this.update = function(){
        
    }
    
    this.display = function(){
        image (main,0,0,1280,720);

        fill (0);
        
        textFont(font)
        textSize(30);
        textAlign(CENTER, CENTER);
        text ('Mission: Hurricane Swirly',width/2,height*.8);
        textSize (20);
        text ('Play Now',width/2,height*.9); 
    } 
}

function sHurricane() {
    this.t = 500;
     
    this.update = function(){
        if (this.t!=0){this.t -= 20;}
        
    }
    
    this.display = function(){
        image (hurricane,0,0,1280,720); 
        imageMode(CENTER);
        image (info, width/2 - this.t, height/2, 600, 337);
        imageMode(CORNER);     
        
        fill(255);
        
        //reference play now button 
        //ellipse (width/2,height/2+112,55,55);
        
//        console.log (collidePointEllipse(mouseX,mouseY,width/2,height/2+112,55,55));
    }     
}

function sCity() {
    this.t = 500;
    this.update = function(){ 
        if (this.t!=0){this.t -= 20;}
    } 
    
    this.display = function(){
        image (city,0,0,1280,720); 
        imageMode(CENTER);
        image (info, width/2 - this.t, height/2, 600, 337);            
        imageMode(CORNER); 
    } 
}


function sSuccess() {    
    this.update = function(){       
    } 
    
    this.display = function(){
    } 
    
}

function sOver() {    
    this.update = function(){       
    } 
    
    this.display = function(){
        image (gameover_screen,0,0,1280,720);
        fill (255);
        textFont(font)
        textSize(40);
        text ('Game Over',width*.65,height*.3); 
        textSize (25);
        text ('The city was destroyed',width*.65,height*.35);      
    } 
    
}

function sControl(){
    if (g.state == 'new'){
        if(mouseX>width/2-50 && mouseX<width/2+50 && mouseY>height*.89 && mouseY<height*.89+20){
            g.state = 'hurricane';
        } 
    } else if (g.state == 'hurricane') {
        if (collidePointEllipse(mouseX,mouseY,width/2,height/2+112,55,55)){ 
            g.state = 'city';
            }  
    } else if (g.state == 'city') {
        if (collidePointEllipse(mouseX,mouseY,width/2,height/2+112,55,55)){ 
            g.state = 'play';
        }  
    }
}  
