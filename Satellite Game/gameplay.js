function part(img,x1,x2,y1,y2,pos){
    this.state = 'rack';
    this.img = img;
    this.x1 = x1/100;
    this.y1 = y1/100;
    this.w = (x2 - x1)/100;
    this.h = (y2 - y1)/100;
    this.pos = pos;

    
    this.display = function(){
        if (this.state == 'set'){
            imageMode(CORNER);
            image (this.img,this.x1*width, this.y1*height, this.w*width, this.h*height);
        } else if (this.state == 'rack') {
            imageMode(CENTER); 
            image (this.img,.91*width, .25*height+this.pos*180, this.w*width*.3, this.h*height*.3);
            imageMode(CORNER);    
        }
    }
}
 



function gameplay(){
    this.fuelsage = new part (fuelsage,45.6,52.8,15.7,74.1,0);
    this.rockets = new part (rockets,41.2,57.3,26.1,87.1,1);
    this.spacecraft = new part (spacecraft,39.5,59.1,28.2,80,2);
    
    

    this.update = function(){        
    }
    
    
    
    this.display = function(){
        image (game_screen,0,0,1280,720);   
        this.fuelsage.display();  
        this.rockets.display();
        this.spacecraft.display();
    }
}


function gameplayControls (){
    
}