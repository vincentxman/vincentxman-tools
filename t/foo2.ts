export interface Bar {
	count: number;
}

class ClsBar {
	a: Bar={
		count:15
	};
	b:string='Im bar';
	setNumber(n:number):void {
		aNumber=n;
	}
}

export const Bar=new ClsBar();

export var aNumber=25;