# JAVASCRIPT GAME ENGINE (JSGE)

## Installation

Clone the git Repository
```
% git clone https://github.com/SymbioTekGit/JSGameEngine.git
% cd JSGameEngine
% npm install
```

Launching the Game.
```
% npm start
```

Connect to url: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)

## GAMES ASSETS

[Solomon's Key](./Assets/Solomon's%20Key/README.md)

## AH GAME ENGINE API

Components
 * AHGameEngine - ./Modules/AHGameEngine.js - add Images, , , AHObjectLayer, AHTileObject.
 * AHTileSet - ./Modules/AHTileSet.js - Collection of Tiles in an Image.
 * AHTileLayer - ./Modules/AHTileLayer.js - Background image formed of AHTileObjects.
 * AHObjectLayer - ./Modules/AHObjectLayer.js - Collectin of Objects to be rendered on Screen.
 * AHTileObject - ./Modules/AHTileObject.js - an independant Tile coming from a AHTileSet.

./Modules/AHGameEngine.js
```
class AHGameEngine {
    async loadImages(urls);

    addTileSet(imageId, tilewidth, tileheight, tilecount);

    addTileLayer(cols, rows);

    addObjectLayer();

    draw();
}
``` 

./Modules/AHTileSet.js
```
class AHTileSet {
        constructor(tilewidth = 8, tileheight = 8);

        load(image, tilewidth, tileheight, tilecount);

        draw(ctx, gid, x, y, xScale = 1, yScale = 1);
}
```

./Modules/AHTileLayer.js
```
class AHTileLayer {
    constructor(cols= 40, rows = 25);

    update(cols, rows, datas);

    fill(cols, rows, gids);

    fill(cols, rows, gids);
}
```

./Modules/AHObjectLayer.js
```
class AHObjectLayer {
    constructor();

    load(tiledobjects);

    draw(ctx, tileset);
}
```

./Modules/AHTileObject.js
```
class AHTileObject {
    constructor();

    update(name, type, x, y, width, height, gid, isVisible, xScale = 1, yScale = 1);

    load(tiledobject);

    draw(ctx, tileset);
}
```
