const { tools } = require('./index'); // require 加载 ./index.js 
/// 等同
/// const v = require('./index');
/// const tools=v.tools;


console.clear();

// vincentxman-tools
console.log('-'.repeat(10), 'vincentxman-tools'.underline.magenta.bold);

tools.fun(); // 将动态载入 tools
tools.fun(); // 已经载入 tools 了，直接调用。
// v.crash;

// console-color
console.log('-'.repeat(10), 'console-color'.underline.magenta.bold);
console.info('console.info');
console.i('console.i');
console.error('console.error');
console.e('console.e');
console.warn('console.warn');
console.w('console.w');
console.debug('console.debug');
console.d('console.d\n');

console.log('there is a ' + 'info'.info + ' e'.e);
console.log('there is a ' + 'error'.error + ' i'.i);
console.log('there is a ' + 'warn'.warn + ' d'.d);
console.log('there is a ' + 'debug'.debug + ' w\n'.w);

console.log('there is a '.yellow.greyBG + 'warn\n'.black.yellowBG.bold);

