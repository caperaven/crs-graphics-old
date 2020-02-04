import {Graphic} from "./entity.js";

export class Triangle extends Graphic {
    constructor(x, y, width, height, fill, stroke) {
        super(x, y, width, height, fill, stroke, `M ${x + (width / 2)} ${y} L ${x + width} ${y + height} L ${x} ${y + height} Z`);
    }

    draw(ctx) {
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.fill(this.path);
    }
}