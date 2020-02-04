import "./crs-graphics.js";
import {Rectangle} from "./graphics/rectangle.js";
import {Triangle} from "./graphics/triangle.js";
import {Circle} from "./graphics/circle.js";

globalThis.crs = globalThis.crs || {};
globalThis.crs.gfx = {
    Rectangle: Rectangle,
    Triangle: Triangle,
    Circle: Circle
};

