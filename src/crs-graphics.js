import {SceneGraph} from "./scenegraph.js"

class Graphics extends HTMLElement {
    connectedCallback() {
        this.scene = new SceneGraph();
        this._initCanvas();
    }

    disconnectedCallback() {
        this._ctx = null;
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

            this.dispatchEvent(new CustomEvent("ready"))
        });
    }

    add(graphic) {
        this.scene.add(graphic);
    }

    draw() {
        this.scene.draw(this._ctx);
    }
}

customElements.define("crs-graphics", Graphics);