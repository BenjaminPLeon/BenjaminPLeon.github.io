const canvas = document.querySelector(".frogger_board");
const ctx = canvas.getContext("2d");
const scale = 10;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var frog;

frog = new Frog();
frog.draw();

let w = window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frog.draw();
}, 250);

window.addEventListener('keydown', ((evt) => {
    if (evt.key === 'ArrowUp' || evt.key === 'ArrowLeft' || evt.key === 'ArrowRight') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        frog.move(evt.key);
        frog.draw();    
    }
    
}))