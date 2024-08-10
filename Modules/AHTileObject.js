class AHTileObject {
    constructor() {
        this.name = "";
        this.type = "";
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.gid = 1;
        this.isVisible = false;
        this.xScale = 1;
        this.yScale = 1;
    }

    update(name, type, x, y, width, height, gid, isVisible, xScale = 1, yScale = 1) {
        this.name = name;
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gid = gid;
        this.isVisible = isVisible;
        this.xScale = xScale;
        this.yScale = yScale;
    }

    load(tiledobject) {
        this.name = tiledobject["name"];
        this.type = tiledobject["type"];
        this.x = tiledobject["x"];
        this.y = tiledobject["y"] - tiledobject["height"];
        this.width = tiledobject["width"];
        this.height = tiledobject["height"];
        this.gid = tiledobject["gid"];
        this.isVisible = tiledobject["visible"];
        this.xScale = 1;
        this.yScale = 1;
    }

    draw(ctx, tileset) {
        if (this.isVisible) {
            tileset.draw(ctx, this.gid, this.x, this.y, this.xScale, this.yScale);
        }
    }
}

export default AHTileObject;