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

    processInput(ctx, selectionCtx, x, y) {
        for (let i = this._items.length -1; i > -1; i--) {
            const item = this._items[i];
            if (item.locatedAt(ctx, x, y) == true) {
                if (item != this._selected) {
                    selectionCtx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    this._selected = item;
                    this._drawSelected(selectionCtx, item);
                }
                break;
            }
        }
    }

    _drawSelected(ctx, item) {
        item.drawSelected(ctx);
    }
}