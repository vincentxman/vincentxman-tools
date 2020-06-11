let consoleInfo = console.info;

console.info    = function (...arg) {
	return consoleInfo(arg.join(' ').green);
};

console.error  = function (...arg) {
	return consoleInfo(arg.join(' ').red);
};

console.warn    = function (...arg) {
	return consoleInfo(arg.join(' ').yellow);
};

console.debug    = function (...arg) {
	return consoleInfo(arg.join(' ').blue);
};