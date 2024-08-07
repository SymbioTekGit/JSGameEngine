const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
var spritesheets = [];

async function preloadImages(urls) {
    const promises = urls.map((url) => {
        return new Promise((resolve, reject) => {
            const image = new Image();
  
            image.src = url;
  
            image.onload = () => resolve(image);
            image.onerror = () => reject(`Image failed to load: ${url}`);
        })
    })
    return Promise.all(promises);
}

class AHSpritesheet {
    constructor(image, tilewidth, tileheight, tilecount) {
        this.firstgid = 1;
        this.image = image;
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
            return;    
        } else {
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(xScale, yScale);
            ctx.drawImage(this.image, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2] * xScale, rect[3] * yScale);
            ctx.restore();
        }
        
    }
}

class AHSprite {
    constructor(x, y, gid) {

    }
}

async function setup() {
    let images = await preloadImages(["../Assets/Solomon's Key/Spritesheets/solomonskey-cpc-tileset-20x16.png"]);

    let stagesdatas = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 2147483654, 7, 7, 7, 6, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 6, 7, 7, 7, 6, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0,
            0, 0, 0, 6, 7, 6, 0, 0, 0, 6, 7, 6, 0, 0, 0,
            0, 0, 0, 7, 0, 0, 7, 7, 7, 7, 0, 7, 0, 0, 0,
            0, 0, 0, 6, 7, 7, 0, 0, 0, 6, 7, 6, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    
    spritesheets.push(new AHSpritesheet(images[0], 20, 16, 120));
    spritesheets[0].draw(ctx, 49, 100, 100);
    spritesheets[0].draw(ctx, 49, 120, 100, -1);
    spritesheets[0].draw(ctx, 49, 100, 116, 1, -1);
    spritesheets[0].draw(ctx, 49, 120, 116, -1, -1);
    
}

function render() {
    // TBD
}

function update() {
    // TBD
}

function loop() {
    // TBD
    
    // Call the game loop recursively
    requestAnimationFrame(loop);
}

async function main() {
    await setup();

    loop();
}

main();