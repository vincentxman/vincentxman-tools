import { vtools, _console as c } from './index'; // import 加载 ./index.d.ts

console.clear();

console.log('-'.repeat(10), 'vnt_tools');
vtools.fun(); // 将动态载入 tools
vtools.fun(); // 已经载入 tools 了，直接调用。
// v.crash;

// console-color
// 库使用 Object.defineProperty 这里需要宣告才能在 ts 内使用
console.log('-'.repeat(10), 'console-color'.underline.magenta.bold);
//console.log('-'.repeat(10), 'console-color'.underline.magenta.bold);
c.info('c.info');
c.i('c.i');
c.error('c.error');
c.e('c.e');
c.warn('c.warn');
c.w('c.w');
c.debug('c.debug');
c.d('c.d\n');

console.info('console.info');
console.i('console.i');
console.error('console.error');
console.e('console.e');
console.warn('console.warn');
console.w('console.w');
console.debug('console.debug');
console.d('console.d\n');

console.log('there is a ' + 'info'.info + ' e\n'.e);

console.log('there is a '.black.whiteBG + 'warn\n'.blue.yellowBG.bold);

