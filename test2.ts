import { tools, _console as c } from './index.js'; // import 加载 ./index.d.ts

console.clear();

console.log('-'.repeat(10), 'vincentxman-tools');
tools.fun(); // 将动态载入 tools
tools.fun(); // 已经载入 tools 了，直接调用。
// v.crash;

// console-color
// 库使用 Object.defineProperty 这里需要宣告才能在 ts 内使用
console.log('-'.repeat(10), ('console-color' as any).underline.magenta.bold);
//console.log('-'.repeat(10), 'console-color'.underline.magenta.bold);

c.info('console.info');
c.i('console.i');
c.error('console.error');
c.e('console.e');
c.warn('console.warn');
c.w('console.w');
c.debug('console.debug');
c.d('console.d\n');


console.log('there is a ' + ('info' as any).info + (' e\n' as any).e);

console.log(('there is a ' as any).yellow.greyBG + ('warn\n' as any).black.yellowBG.bold);