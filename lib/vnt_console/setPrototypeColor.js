"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const styles = require('./style');

let setPrototypeColor = function (str, style) {
	if (style === 'getAll') return Object.keys(styles);
	return styles[style][0] + str + styles[style][1];
};

setPrototypeColor(false, 'getAll').forEach(function (style) {
	Object.defineProperty(Number.prototype, style, { // 数字
		configurable: true,
		get: function () {
			return setPrototypeColor(this.toString(), style);
		}
	});
	Object.defineProperty(String.prototype, style, { // 字串
		configurable: true,
		get: function () {
			return setPrototypeColor(this, style);
		}
	});
});