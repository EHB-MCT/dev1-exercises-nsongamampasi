"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 0;
    while (i<9) {
        let x = 75;
        let y = 75;
        Utils.drawLine(x, x+(*) , y);
        Utils.drawLine(, +(*i);
        i = ;
    }
}