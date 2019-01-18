

function game() {
    this.state = 'new';
    this.screen_intro = new sIntro();
    this.screen_city = new sCity();
    this.screen_hurricane = new sHurricane();
    
    this.update = function(){
        
    }
     
    this.display = function(){
        if (g.state == 'new'){
            this.screen_intro.update();
            this.screen_intro.display();
        } else if (g.state == 'hurricane'){
            this.screen_hurricane.update();
            this.screen_hurricane.display();
        } else if (g.state == 'city'){
            this.screen_city.update();
            this.screen_city.display();
        }
    }
    
}