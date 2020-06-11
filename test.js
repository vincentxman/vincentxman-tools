let v = require('./index');
console.clear();

// vincentxman-tools
console.log('-'.repeat(10), 'vincentxman-tools'.underline.magenta.bold);

v.tools.fun(); // 将动态载入 tools
v.tools.fun(); // 已经载入 tools 了，直接调用。
// v.crash;

// console-color
console.log('-'.repeat(10), 'console-color'.underline.magenta.bold);
console.info('this is a test');
console.i('this is a test');
console.error('this is a test');
console.e('this is a test');
console.warn('this is a test');
console.w('this is a test');
console.debug('this is a test');
console.d('this is a test\n');

console.log('there is a ' + 'info'.info + ' too'.e);
console.log('there is a ' + 'error'.error + ' too'.i);
console.log('there is a ' + 'warn'.warn + ' too'.d);
console.log('there is a ' + 'debug'.debug + ' too\n'.w);

console.log('there is a '.yellow.greyBG + 'warn\n'.black.yellowBG.bold);

