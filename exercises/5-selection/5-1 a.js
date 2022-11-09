"user strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawFlag();

function drawFlag() {
	let width = window.innerwidth;
	let height = window.innerHeight;

	for (let i = 0; i <= 100000; i++) {
		let posx = Math.floor(Math.random() * (width / 2));
		let posy = Math.floor(Math.random() * height);

		Utils.fillCircle(posx, posy, 2);
	}
	for (let i = 0; i <= 100000; i++) {
		let posx = Math.floor(Math.random() * (width / 2) + width / 2);
		let posy = Math.floor(Math.random() * height);

		Utils.fillCircle(posx, posy, 2);
	}
}
