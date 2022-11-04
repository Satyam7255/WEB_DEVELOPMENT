var blocksize = 25;
var rows = 20;
var columns = 20;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var foodX = blockSize * 10;
var foodY = blockSize * 10;

var speedX = 0;
var speedY = 0;

var score = 0;

var body = [];

window.onload = function(){
	board = document.getElementById("board");
	board.height = rows * blockSize;
	board.width = cols * blockSize;
	context = board.getContext("2d");

	placeFood();
	document.addEventListener("keyup", chanegDirection);
	setInterval(update, 1000/10);
	
}

function update(){
	context.fileStyle="black";
	context.fillRect(0. 0, board.width, board.height);

	context.fillStyle="lime";
	snakeX += speedx * blockSize;
	snakeY += speedY * blockSize;
	context.fillRect(snakeX, snakeY, blockSize, blockSize);

	if(let i=0; i<body.length; i++){
		context.fillRect(body[i][0], body[i][1], blockSize, blockSize);
	}

	for(let i=body.length-1; i>0 ;i--){
		body[i] = body[i-1];
	}

	if(body.length){
		body[0] = [snakeX, snakeY];	
	}

	context.fillStyle="red";
	context.fillRect(foodX, foodY, blockSize, blockSize);
	
	if(snakeX == foodx && snakey == foodY){
		body.push([foodX, foodY])
		placefood();
	}
}

function changeDirection(){
	if(e.code == "ArrowUp" && velocityY != 1){
		speedX = 0;
		speedY = 0;
	}
	else if (e.code == "ArrowDown" && velocityY != -1){
		speedX = 0;
		speedY = 1;
	}
	else if (e.code == "ArrowLeft" && velocityY != 1){
		speedX = -1;
		speedY = 0;
	}
	else if (e.code == "ArrowRight" && velocityY != -1){
		speedX = 1;
		speedY = 0;
	}
	
}

function placefood(){
	foodX = Math.floor(Math.random() * cols) * blockSize;
	foodY = Math.floor(Math.random() * rows) * blockSize;
}  
