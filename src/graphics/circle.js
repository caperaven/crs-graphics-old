import {Graphic} from "./entity.js";

export class Circle extends Graphic {
    constructor(x, y, r, fill, stroke) {
        super(x, y, r*2, r*2);

        if (fill) this.fill = fill;
        if (stroke) this.stroke = stroke;

        this.path.arc(x, y, r, 0, 2 * Math.PI);
    }

    draw(ctx) {
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.fill(this.path);
    }

    locatedAt(ctx, x, y) {
        return ctx.isPointInPath(this.path, x, y);
    }
}