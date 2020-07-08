"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

let hookConsoleInfo = console.info;

console.i =
	console.info = function (...arg) {
		return hookConsoleInfo(arg.join(' ').green);
	};

console.e =
	console.error = function (...arg) {
		return hookConsoleInfo(arg.join(' ').red);
	};

console.w =
	console.warn = function (...arg) {
		return hookConsoleInfo(arg.join(' ').yellow);
	};

console.d =
	console.debug = function (...arg) {
		return hookConsoleInfo(arg.join(' ').blue);
	};

module['exports'] = {
	
	init: function(){},

	i: console.i,
	info: console.i,

	e: console.e,
	error: console.e,

	w: console.w,
	warn: console.w,
	
	d: console.d,
	debug: console.d
}	