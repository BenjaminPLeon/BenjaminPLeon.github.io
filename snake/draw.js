const canvas = document.querySelector(".snake_board");
const ctx = canvas.getContext("2d");
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
    snake = new Snake();
    block = new Block();

    block.makeLoc();
    console.log(block)

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();
    }, 250);
}());

window.addEventListener('keydown', ((evt) => {
    snake.changeDirection(evt.key);
}))