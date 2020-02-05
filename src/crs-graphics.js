import {SceneGraph} from "./scenegraph.js"

class Graphics extends HTMLElement {
    connectedCallback() {
        this._mouseMoveHandler = this._mouseMove.bind(this);
        this._drawHandler = this._draw.bind(this);

        this.scene = new SceneGraph();
        this._initCanvas();
    }

    disconnectedCallback() {
        this._ctx.canvas.removeEventListener("mousemove", this._mouseMoveHandler);

        this._ctx = null;
        this._selectionCtx = null;
        this._mouseMoveHandler = null;
    }

    _initCanvas() {
        const canvas = document.createElement("canvas");
        const selectionCanvas = document.createElement("canvas");
        selectionCanvas.style.pointerEvents = "none";

        this.appendChild(canvas);
        this.appendChild(selectionCanvas);

        requestAnimationFrame(() => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            selectionCanvas.width = canvas.width;
            selectionCanvas.height = canvas.height;

            this._ctx = canvas.getContext("2d");
            this._ctx.scale(dpr, dpr);

            this._selectionCtx = selectionCanvas.getContext("2d");
            this._selectionCtx.scale(dpr, dpr);
            this._selectionCtx.strokeStyle = "black";
            this._selectionCtx.lineWidth = 2;
            this._selectionCtx.setLineDash([5, 5]);

            canvas.addEventListener("mousemove", this._mouseMoveHandler);
            this._draw();

            this.dispatchEvent(new CustomEvent("ready"))
        });
    }

    add(graphic) {
        this.scene.add(graphic);
    }

    draw() {
        this.scene.draw(this._ctx);
    }

    _mouseMove(event) {
        this.x = event.clientX;
        this.y = event.clientY;
    }

    _draw() {
        this.scene.processInput(this._ctx, this._selectionCtx, this.x, this.y);

        requestAnimationFrame(this._drawHandler);
    }
}

customElements.define("crs-graphics", Graphics);