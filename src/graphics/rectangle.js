import {Graphic} from "./entity.js";

export class Rectangle extends Graphic {
    constructor(x, y, width, height, fill, stroke) {
        super(x, y, width, height);

        if (fill) this.fill = fill;
        if (stroke) this.stroke = stroke;
        this.path.rect(this.x, this.y, this.width, this.height);
    }

    draw(ctx) {
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.fill(this.path);
    }
}