function Snake() {
    this.x = 0;
    this.y = 0;
    // xSpeed is initialized so that the snake will start out by moving verttically to the right
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.length = 0;
    this.tail = [];

    // redraw the snake and all of its tail, called every interval
    this.draw = function() {
        ctx.fillStyle = "#FFFFFF";
        for(let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    /* update the location of all blocks in the snake and its tail.  the tail is also updated by shifting all of
        the blocks up by one index in the tail array */
    this.update = function() {
        for (let i=0; i<this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.length - 1] = {x: this.x, y: this.y}

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) {
            this.x = 0;
        }

        if (this.y > canvas.height) {
            this.y = 0;
        }

        if (this.x < 0) {
            this.x = canvas.width;
        }

        if (this.y < 0) {
            this.y = canvas.height;
        }
    }

    // method that updates the speed variables of the snake based on the input from the user
    this.changeDirection = function(dir) {
        switch(dir) {
            case 'ArrowUp':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'ArrowDown':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'ArrowLeft':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 'ArrowRight':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    // a function that is called when the snake head collides with a block, increasing the length of the snake
    this.eat = function(block) {
        if (this.x === block.x && this.y === block.y) {
            this.length++;
            return true;
        }
        return false;
    }

    // checks for game ending collisions in the body of the snake, and displays game over text if there is a colision
    this.checkCollision = function() {
        for (var i=0; i<this.tail.length; i++) {
            if(this.x === this.tail[i].x && this.y === this.tail[i].y || this.tail[i].x < 0 || this.tail[i].y < 0 || this.tail[i].x > canvas.width || this.tail[i].y > canvas.height) {
                // console.log("Collision");
                this.length = 0;
                this.tail = [];
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = "30px Arial";
                ctx.fillText("Game Over", 10, 50);
                return true;
            }
            return false;
        }
    }
}