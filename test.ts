//import {tools, _console as c} from './index';
let v = require('./index');
let tools=v.tools;
let c=v._console;

console.clear();

// vincentxman-tools
console.log('-'.repeat(10), 'vincentxman-tools');

v.tools.fun(); // 将动态载入 tools
v.tools.fun(); // 已经载入 tools 了，直接调用。
// v.crash;

// console-color
console.log('-'.repeat(10), 'console-color');
c.info('this is a test');
c.i('this is a test');
c.error('this is a test');
c.e('this is a test');
c.warn('this is a test');
c.w('this is a test');
c.debug('this is a test');
c.d('this is a test\n');

// console.log('there is a ' + 'info'.info + ' too'.e);
// console.log('there is a ' + 'error'.error + ' too'.i);
// console.log('there is a ' + 'warn'.warn + ' too'.d);
// console.log('there is a ' + 'debug'.debug + ' too\n'.w);

// console.log('there is a '.yellow.greyBG + 'warn\n'.black.yellowBG.bold);


