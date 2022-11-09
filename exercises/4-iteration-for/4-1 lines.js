"user strict";
import context from "../../scripts/context.js";
import * as utils from "../../scripts/utils.js";


drawLines();

function drawLines() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498D8";
	context.fillRect = (0, 0, width, height);
	drawWormole();
}

function drawWormole() {
	let step = 19;
	for (let i = 0; i < 60; i++) {
		console.log(i);
		utils.drawLine(width / 2, height / 2, 0 + step * i, 0);
	}
}
