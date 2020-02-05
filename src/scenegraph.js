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

    processInput(ctx, x, y) {
        let selected = null;

        for (let i = this._items.length -1; i > -1; i--) {
            const item = this._items[i];
            if (item.locatedAt(ctx, x, y) == true) {
                selected = item;
                console.log(selected);
                break;
            }
        }
    }
}