import AHGameEngine from "../Modules/AHGameEngine.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
var game = new AHGameEngine(ctx, 320, 200);

async function setup() {
    let cols = 15;
    let rows = 12;
    let tilewidth = 20;
    let tileheight = 16;

    await game.loadImages(["../Assets/Solomon's Key/Spritesheets/solomonskey-cpc-tileset-20x16.png"]);
    game.addTileSet(0, tilewidth, tileheight, 120);

    game.addTileLayer(15, 12);
    game.layers[0].fill(cols, rows, [1, 2]);

    let objectdatas = [
        [
            {
             "gid":49,
             "height":16,
             "id":1,
             "name":"Dana",
             "rotation":0,
             "type":"Player",
             "visible":true,
             "width":20,
             "x":80,
             "y":160
            }, 
            {
             "gid":65,
             "height":16,
             "id":2,
             "name":"Goblin",
             "rotation":0,
             "type":"Ennemy",
             "visible":true,
             "width":20,
             "x":140,
             "y":144
            }, 
            {
             "gid":82,
             "height":16,
             "id":3,
             "name":"Ghost",
             "rotation":0,
             "type":"Ennemy",
             "visible":true,
             "width":20,
             "x":140,
             "y":48
            }, 
            {
             "gid":26,
             "height":16,
             "id":5,
             "name":"FirePotion",
             "rotation":0,
             "type":"MagicItem",
             "visible":true,
             "width":20,
             "x":160,
             "y":80
            }, 
            {
             "gid":26,
             "height":16,
             "id":6,
             "name":"FirePotion",
             "rotation":0,
             "type":"MagicItem",
             "visible":true,
             "width":20,
             "x":120,
             "y":80
            }, 
            {
             "gid":37,
             "height":16,
             "id":7,
             "name":"Bell",
             "rotation":0,
             "type":"MagicItem",
             "visible":true,
             "width":20,
             "x":140,
             "y":80
            }, 
            {
             "gid":36,
             "height":16,
             "id":8,
             "name":"Hourglass",
             "rotation":0,
             "type":"MagicItem",
             "visible":false,
             "width":20,
             "x":140,
             "y":16
            }, 
            {
             "gid":18,
             "height":16,
             "id":9,
             "name":"Bonus",
             "rotation":0,
             "type":"200",
             "visible":true,
             "width":20,
             "x":120,
             "y":96
            }, 
            {
             "gid":18,
             "height":16,
             "id":10,
             "name":"Bonus",
             "rotation":0,
             "type":"200",
             "visible":true,
             "width":20,
             "x":160,
             "y":96
            }, 
            {
             "gid":19,
             "height":16,
             "id":11,
             "name":"Bonus",
             "rotation":0,
             "type":"500",
             "visible":true,
             "width":20,
             "x":140,
             "y":96
            }, 
            {
             "gid":31,
             "height":16,
             "id":12,
             "name":"Jewel",
             "rotation":0,
             "type":"MagicItem",
             "visible":true,
             "width":20,
             "x":40,
             "y":96
            }, 
            {
             "gid":31,
             "height":16,
             "id":13,
             "name":"Jewel",
             "rotation":0,
             "type":"MagicItem",
             "visible":true,
             "width":20,
             "x":240,
             "y":96
            }, 
            {
             "gid":43,
             "height":16,
             "id":14,
             "name":"Door",
             "rotation":0,
             "type":"Goal",
             "visible":true,
             "width":20,
             "x":140,
             "y":32
            }, 
            {
             "gid":40,
             "height":16,
             "id":15,
             "name":"Key",
             "rotation":0,
             "type":"Goal",
             "visible":true,
             "width":20,
             "x":200,
             "y":160
            }]];
    game.addObjectLayer();
    game.layers[1].load(objectdatas[0]);

    let stagesdatas = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 6, 7, 7, 7, 6, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 6, 7, 7, 7, 6, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0,
        0, 0, 0, 6, 7, 6, 0, 0, 0, 6, 7, 6, 0, 0, 0,
        0, 0, 0, 7, 0, 0, 7, 7, 7, 7, 0, 7, 0, 0, 0,
        0, 0, 0, 6, 7, 7, 0, 0, 0, 6, 7, 6, 0, 0, 0,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]];
    game.addTileLayer(15, 12);
    game.layers[2].update(cols, rows, stagesdatas[0]);

    game.draw();
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