import { Bar,aNumber }  from './foo';
let x: Bar = Bar.a;
let aN=aNumber;
aN=11;
Bar.setNumber(100);
Bar.b='bbbbbbbbbb';
console.log(x.count,aNumber,aN);
