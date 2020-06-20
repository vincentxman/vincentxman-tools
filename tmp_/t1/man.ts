
// 以下二选一
/*1*/ // import { Bar,aNumber,Bar2, who }  from './js/foo';
/*2*/ import { Bar,aNumber,Bar2,who }  from './ts/foo2';

let x: Bar2 = Bar.a;
let aN=aNumber;
Bar.setNumber(100);
Bar.b='bbbbbbbbbb';

console.log(`主程序 main.ts import 静态载入:${who()}`);
