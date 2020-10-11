const cvs = document.getElementById("snake");
const context = cvs.getContext("2d");
//const text = "";
//const TEXT_SIZE = 40;
// create the unit
const box = 32;
//const gameOver = false;

var canv = document.getElementById("snake");
// load images

const ground = new Image();
ground.src = "../static/assets/images/snake/ground.png";

const foodImg = new Image();
foodImg.src = "../static/assets/images/snake/food.png";

// load audio files
let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "../static/assets/sounds/snake/dead.mp3";
eat.src = "../static/assets/sounds/snake/eat.mp3";
up.src = "../static/assets/sounds/snake/up.mp3";
right.src = "../static/assets/sounds/snake/right.mp3";
left.src = "../static/assets/sounds/snake/left.mp3";
down.src = "../static/assets/sounds/snake/down.mp3";

// create the snake

var snake = new Array();
snake[0] = new Image();
snake[0].src = "../static/assets/images/snake/snake.png";

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// create the food

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// create the score var

let score = 0;

//control the snake

let d_2;

document.addEventListener("keydown",direction);

function direction(event){

    let key = event.keyCode;
    if( key == 37 && d_2 != "RIGHT"){
        left.play();
        d_2 = "LEFT";
    }else if(key == 38 && d_2 != "DOWN"){
        d_2 = "UP";
        up.play();
    }else if(key == 39 && d_2 != "LEFT"){
        d_2 = "RIGHT";
        right.play();
    }else if(key == 40 && d_2 != "UP"){
        d_2 = "DOWN";
        down.play();
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}



// draw everything to the canvas

function draw(){
    
    context.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        var imgSrc = document.getElementById("icon");
        var imgRender = context.createPattern(imgSrc, 'repeat');
        context.fillStyle = imgRender;
        context.fillRect(snake[i].x,snake[i].y,box,box);
        context.fill();        
        context.strokeStyle = "#00008B";
        context.strokeRect(snake[i].x,snake[i].y,box,box);
        context.fill();
    }
    
    context.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d_2 == "LEFT") snakeX -= box;
    if( d_2 == "UP") snakeY -= box;
    if( d_2 == "RIGHT") snakeX += box;
    if( d_2 == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        eat.play();
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        clearInterval(game);
        dead.play();
    } /*else if (gameResult = false ){
      newGame();
    }*/
    
    snake.unshift(newHead);
    
    context.fillStyle = "white";
    context.font = "45px Changa one";
    context.fillText(score,2*box,1.6*box);
}

// call draw function every 100 ms

let game = setInterval(draw,130);