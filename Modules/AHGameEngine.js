import AHTileSet from "../Modules/AHTileSet.js";
import AHTileLayer from "../Modules/AHTileLayer.js";
import AHObjectLayer from "../Modules/AHObjectLayer.js";

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

class AHGameEngine {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.images = [];
        this.tilesets = [];
        this.layers = [];
        this.objectlayers = [];
    }

    async loadImages(urls) {
        this.images = await preloadImages(urls);
    }

    addTileSet(imageId, tilewidth, tileheight, tilecount) {
        let tileset = new AHTileSet(tilewidth, tileheight);
        tileset.load(this.images[imageId], tilewidth, tileheight, tilecount);
        this.tilesets.push(tileset);
    }

    addTileLayer(cols, rows) {
        let tilelayer = new AHTileLayer(cols, rows);
        this.layers.push(tilelayer);
    }

    addObjectLayer() {
        let objectlayer = new AHObjectLayer();
        this.layers.push(objectlayer);
    }

    draw() {
        this.layers.forEach((layer) => {
            layer.draw(this.ctx, this.tilesets[0]);
        })
    }
}

export default AHGameEngine;