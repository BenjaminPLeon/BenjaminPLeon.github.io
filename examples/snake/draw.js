// Set up some global variables for use in all of the snake files.  select the canvas and set it's context to 2d.
const canvas = document.querySelector(".snake_board");
const ctx = canvas.getContext("2d");
const scale = 10;

// set the number of rows and columns on the canvas.
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

// a function to be run on loading on the canvas, Initializes a snake object aswell as a block object
(function setup() {
    snake = new Snake();
    block = new Block();

    // a function used to randomly place a block onto the board, implementation in block
    block.makeLoc();
    
    // create a windows that updates every 250 milliseconds.  This is the window that will run the game  
    let w = window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        block.draw();
        /* check to see if there is a collision on the snake.  if there is then clear the interval to stop updates and 
            Display a game over block, implementation in snake*/
        if(snake.checkCollision()) {
            window.clearInterval(w);
        } else {
            snake.update();       
            snake.draw();

            if (snake.eat(block)) {
                block.makeLoc();
            } 
        }
    }, 150);
}());

window.addEventListener('keydown', ((evt) => {
    snake.changeDirection(evt.key);
}))

