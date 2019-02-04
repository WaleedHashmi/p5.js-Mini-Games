function block(x,y){
    this.x = x;
    this.y = y;
    this.type = 'none';
    
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
        rect(this.x*(canvasSize/gridSize),this.y*(canvasSize/gridSize),canvasSize/gridSize,canvasSize/gridSize)
    }
}

function snake(){
    this.x;             // x and y coordinates of the snake's head
    this.y;
    this.body = []
    this.v = 2;
    this.dir = [[0,1],[0,-1],[1,0],[-1,0]]
    
    this.move = function(){              
        for (var i = 0; i < this.body.length; i++){
            if (this.body[i].x + 1<= gridSize-1){
                board[this.body[i].x][this.body[i].y].type='none';
                this.body[i].x += this.dir[this.v][0]; 
                this.body[i].y += this.dir[this.v][1];
                board[this.body[i].x][this.body[i].y].type='snake';
            }
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
    s.body.push(board[gridSize/2][gridSize/2]);
    s.x = gridSize/2;
    s.y = gridSize/2;
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
    s.move();
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        s.v=0; 
    } else if (keyCode === DOWN_ARROW){
        s.v=1;    
    } else if (keyCode === RIGHT_ARROW){
        s.v=2;   
    } else if (keyCode === LEFT_ARROW){
        s.v=3;   
    }             
}


