function Frog() {
    this.x = canvas.width/2 - scale;
    this.y = canvas.height - scale;

    this.draw = function() {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.move = function(dir) {
        switch(dir) {
            case 'ArrowUp':
                this.x = this.x;
                this.y = this.y + scale;
                break;
            case 'ArrowLeft':
                this.x = this.x - scale;
                this.y = this.y;
                break;
            case 'ArrowRight':
                this.x = this.x + scale;
                this.y = this.y;
                break;
        }
        console.log('x: ' + this.x + ' y: ' + this.y);
    }
}