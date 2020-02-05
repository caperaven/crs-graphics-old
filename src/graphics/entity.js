export class Entity {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.x2 = x + width;
        this.y2 = y + height;
    }

    locatedAt(ctx, x, y) {
        return x >= this.x && x <= this.x2 && y >= this.y && y <= this.y2;
    }
}

export class Graphic extends Entity {
    constructor(x, y, width, height, fill, stroke, data) {
        super(x, y, width, height);

        this.fill = fill || "#ffbb00";
        this.stroke = stroke || "transparent";
        this.path = new Path2D(data);
    }

    drawSelected(ctx) {
        ctx.stroke(this.path);
    }

    locatedAt(ctx, x, y) {
        return ctx.isPointInPath(this.path, x, y);
    }
}