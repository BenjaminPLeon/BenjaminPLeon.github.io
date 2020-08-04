function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.length = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = "#FFFFFF";
        for(let i=0; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

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

    this.eat = function(block) {
        if (this.x === block.x && this.y === block.y) {
            this.length++;
            return true;
        }
        return false;
    }

    this.checkCollision = function(w) {
        for (var i=0; i<this.tail.length; i++) {
            if(this.x === this.tail[i].x && this.y === this.tail[i].y) {
                // console.log("Collision");
                this.length = 0;
                this.tail = [];
                window.clearInterval(w);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.font = "30px Arial";
                ctx.fillText("Game Over", 10, 50);
            }
        }
    }
}