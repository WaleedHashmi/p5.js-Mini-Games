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
    
    this.update = function(){
        
    }
    
    this.display = function(){
        image (hurricane,0,0,1280,720); 
    }
}

function sCity() {
    this.update = function(){
        
    } 
    
    this.display = function(){
        image (city,0,0,1280,720); 
    }
}


