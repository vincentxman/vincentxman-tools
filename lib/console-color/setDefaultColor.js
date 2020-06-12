"use strict";

let consoleInfo = console.info;

console.i =
	console.info = function (...arg) {
		return consoleInfo(arg.join(' ').green);
	};

console.e =
	console.error = function (...arg) {
		return consoleInfo(arg.join(' ').red);
	};

console.w =
	console.warn = function (...arg) {
		return consoleInfo(arg.join(' ').yellow);
	};

console.d =
	console.debug = function (...arg) {
		return consoleInfo(arg.join(' ').blue);
	};

module['exports'] = {
	i: console.i,
	info: console.i,

	e: console.e,
	error: console.e,

	w: console.w,
	warn: console.w,
	
	d: console.d,
	debug: console.d
}	