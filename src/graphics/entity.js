export class Entity {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

export class Graphic extends Entity {
    constructor(x, y, width, height, fill, stroke, data) {
        super(x, y, width, height);

        this.fill = fill || "#ffbb00";
        this.stroke = stroke || "transparent";
        this.path = new Path2D(data);

        console.log(data);
    }
}