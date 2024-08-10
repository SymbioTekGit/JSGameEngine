class AHTileLayer {
    constructor(cols= 40, rows = 25) {
        this.cols = cols;
        this.rows = rows;
        this.datas = Array(this.cols * this.rows).fill(0);
    }

    update(cols, rows, datas) {
        this.cols = cols;
        this.rows = rows;
        this.datas = Array(this.cols * this.rows).fill(0);
        for(let i=0; i<datas.length; i++) {
            this.datas[i] = datas[i];
        }
    }

    fill(cols, rows, gids) {
        this.cols = cols;
        this.rows = rows;
        this.datas = Array(this.cols * this.rows).fill(0);
        let id = 0;
        for(let i=0; i<this.datas.length; i++) {
            this.datas[i] = gids[id];
            id += 1;
            if (id > gids.length - 1) {
                id = 0;
            }
        }
    }

    draw(ctx, tileset) {
        for(let row=0; row<this.rows; row++) {
            for(let col=0; col<this.cols; col++) {
                let gid = this.datas[row * this.cols + col];
                if (gid == 0) {
                    continue
                }
                tileset.draw(ctx, gid, col * tileset.tilewidth, row * tileset.tileheight);
            }
        }
    }
}

export default AHTileLayer;