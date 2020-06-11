# Description
this plugins is used for ...
# install
> npm install vincentxman-tools -D

# use
``
require('vincentxman-tools');
``
# DEMO1
use default color
设定了默认颜色。console.info直接输出为红色
````
//use color
console.info('------------ default color--------');
console.info('info', 'this is green text'); //green text
console.warn('this is warn');//yellowBG text
console.error('this is error');//red text
console.debug('this is debug');//gray text
console.log('this is log','msg1'.red, 'msg2'.blue);
console.info('this is info','msg1'.red, 'msg2'.blue); //force change default color
console.info('----------------------------');
````