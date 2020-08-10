function Block() {
    this.x;
    this.y;

    // generates a random location for the block
    this.makeLoc = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    // redraws the block.  called every interval
    this.draw = function() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}