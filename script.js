'use strict'

const DomElement = function (selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;

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

		newElem.textContent = 'Текст созданного блока';
		newElem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px;`
		document.body.append(newElem);
	}
}

const div = new DomElement('.green', 200, 150, 'green', 26);
const div1 = new DomElement('#pink', 300, 150, 'pink', 20);
const span = new DomElement('span', 300, 150, '#ccc', 14);


div.createElem();
div1.createElem();
span.createElem();