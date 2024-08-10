class AHTileSet {
    constructor(tilewidth = 8, tileheight = 8) {
        this.firstgid = 1;
        this.image = null;
        this.tilewidth = tilewidth;
        this.tileheight = tileheight;
        this.tilecount = 0;
        this.rects = [];
    }

    load(image, tilewidth, tileheight, tilecount) {
        this.firstgid = 1;
        this.image = image;
        this.tilewidth = tilewidth;
        this.tileheight = tileheight;
        this.tilecount = tilecount;
        this.rects = [];
        
        let count = 0;
        let cols = Math.floor(image.width / tilewidth);
        while(count < tilecount) {
            let row = Math.floor(count / cols);
            let col = count - row * cols;
            let rect = [col * tilewidth, row * tileheight, tilewidth, tileheight];
            this.rects.push(rect);
            count += 1;
        }
    }

    draw(ctx, gid, x, y, xScale = 1, yScale = 1) {
        let id = gid - this.firstgid;
        let rect = this.rects[id];  
        if (xScale == 1 & yScale == 1) {
            ctx.drawImage(this.image, rect[0], rect[1], rect[2], rect[3], x, y, rect[2], rect[3]);
        } else {
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(xScale, yScale);
            ctx.drawImage(this.image, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2] * xScale, rect[3] * yScale);
            ctx.restore();
        }
    }
}

export default AHTileSet;