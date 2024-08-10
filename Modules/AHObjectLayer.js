import AHTileObject from "../Modules/AHTileObject.js";

class AHObjectLayer {
    constructor() {
        this.objects = [];
    }

    load(tiledobjects) {
        tiledobjects.forEach((tiledobject) => {
            let object = new AHTileObject();
            object.load(tiledobject);
            this.objects.push(object);
        })
    }

    draw(ctx, tileset) {
        this.objects.forEach((object) => {
            object.draw(ctx, tileset);
        })
    }
}

export default AHObjectLayer;