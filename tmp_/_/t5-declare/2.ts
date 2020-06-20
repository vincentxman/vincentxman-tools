import { AClass } from './1';

declare module './1' {
	interface AClass {
		test: (b: number) => number;
	}
}

AClass.prototype.test = (b: number): number => {
	return b;
}

let c=new AClass("iiiiiii");
c.test(6);

var x=5;
