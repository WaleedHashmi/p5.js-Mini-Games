function block(x,y){
    this.x = x*(canvasSize/gridSize);
    this.y = y*(canvasSize/gridSize);
    this.active = false; 
    this.type = "none";
    this.head = false;
    
    this.update = function(){
        
    }
    
    this.display = function(){
        noStroke();
//        fill(255,255,random(0,255));
        
        if (this.type=='snake'){
            fill (255);
        } else if (this.type=='food') {
            fill (255,17,81);
        } else {
            fill (0);
        }
        rect(this.x,this.y,canvasSize/gridSize,canvasSize/gridSize)
    }
}

function snake(){
    this.head = [gridSize/2,gridSize/2]; 
    this.body = []
    this.v = 'right';
    
    this.body.push(this.head);
    
    this.moveRight = function(){
        for (var i = 0; i < this.body.length(); i++){
            this.body[i][1] +=1;
        }
    }

}



var board = [];
var canvasSize = 800;
var gridSize = 50;    // 10x10 pixels will make one block of snake/food
var s = new snake; 


function setBoard(){
    // creating an empty grid
    for (var i = 0; i< gridSize; i++){
        var temp = [];
        for (var j = 0; j< gridSize; j++){
            temp.push(new block(i,j));
        }
        board.push(temp);
    } 
    
    board[gridSize/2][gridSize/2].type='snake';

}

function displayBoard(){
    for (var i = 0; i< gridSize; i++){
        for (var j = 0; j< gridSize; j++){
            board[i][j].display();
        }
    }     
}

function setup(){
    createCanvas (canvasSize,canvasSize);
    setBoard();

}

function draw() {
    background (0);
    displayBoard();
    s.moveRight();
    
}


