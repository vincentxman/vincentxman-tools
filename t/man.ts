//import { Bar,aNumber,Bar2 }  from './js/foo';
import { Bar,aNumber,Bar2 }  from './ts/foo2';

let x: Bar2 = Bar.a;
let aN=aNumber;
Bar.setNumber(100);
Bar.b='bbbbbbbbbb';

console.log(x.count,aNumber,aN);
