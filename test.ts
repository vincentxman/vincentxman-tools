
const { tools, _console } = require('./index'); // require 加载 ./index.js  不是 ./index.d.ts
const c = _console;
// 等同
// const v = require('./index');
// const tools = v.tools;
// const c = v._console;

console.clear();

// vincentxman-tools
console.log('-'.repeat(10), 'vincentxman-tools');

tools.fun(); // 将动态载入 tools
tools.fun(); // 已经载入 tools 了，直接调用。
// v.crash;

// console-color
//console.log('-'.repeat(10), 'console-color');
console.log('-'.repeat(10), ('console-color' as any).underline.magenta.bold);
c.info('console.info');
c.i('console.i');
c.error('console.error');
c.e('console.e');
c.warn('console.warn');
c.w('console.w');
c.debug('console.debug');
c.d('console.d\n');

// 库使用 Object.defineProperty 这里需要宣告才能在 ts 内使用
declare interface String {
	info: string,
	i: string,

	error: string,
	e: string,

	warn: string,
	w: string,

	debug: string,
	d: string,

	yellow: string,
	black: string,
	greyBG: string,
	yellowBG: string,
}

console.log('there is a ' + 'info'.info + ' e'.e);
console.log('there is a ' + 'error'.error + ' i'.i);
console.log('there is a ' + 'warn'.warn + ' d'.d);
console.log('there is a ' + 'debug'.debug + ' w\n'.w);

console.log('there is a '.yellow.greyBG + 'warn'.black.yellowBG.bold);
console.log('there is a '.yellow.greyBG + 'warn\n'.black.yellowBG);

