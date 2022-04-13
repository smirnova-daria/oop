'use strict'

const DomElement = function (selector, height, width, bg, fontSize, position) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.position = position;

	this.createElem = function () {
		let newElem;
		if (this.selector[0] === '.') {
			newElem = document.createElement('div');
			newElem.classList.add(this.selector.slice(1));
		} else if (this.selector[0] === '#') {
			newElem = document.createElement('p');
			newElem.id = this.selector.slice(1);
		} else {
			newElem = document.createElement(this.selector);
		}

		newElem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; position: ${this.position};`

		document.body.append(newElem);
	}
}

const square = new DomElement('.blue', 100, 100, 'lightblue', 14, 'absolute');

document.addEventListener('DOMContentLoaded', () => {
	square.createElem();
})


document.addEventListener('keydown', (event) => {
	const elem = document.querySelector('.blue')

	let top = +elem.style.top.slice(0, elem.style.top.length - 2) || 0
	let left = +elem.style.left.slice(0, elem.style.left.length - 2) || 0

	switch (event.code) {
		case "ArrowUp":
			top -= 10;
			elem.style.top = top + 'px';
			break;
		case "ArrowDown":
			top += 10;
			elem.style.top = top + 'px';
			break;
		case "ArrowLeft":
			left -= 10;
			elem.style.left = left + 'px';
			break;
		case "ArrowRight":
			left += 10;
			elem.style.left = left + 'px';
			break;
	}
})