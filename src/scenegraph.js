export class SceneGraph {
    constructor() {
        this._items = [];
    }

    dispose() {
        this._items = null;
    }

    add(graphic) {
        this._items.push(graphic);
    }

    draw(ctx) {
        for (let item of this._items) {
            item.draw(ctx);
        }
    }
}