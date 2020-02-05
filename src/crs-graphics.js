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
        this._mouseMoveHandler = null;
    }

    _initCanvas() {
        const canvas = document.createElement("canvas");
        this.appendChild(canvas);

        requestAnimationFrame(() => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            this._ctx = canvas.getContext("2d");
            this._ctx.scale(dpr, dpr);

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
        this.scene.processInput(this._ctx, this.x, this.y);

        requestAnimationFrame(this._drawHandler);
    }
}

customElements.define("crs-graphics", Graphics);