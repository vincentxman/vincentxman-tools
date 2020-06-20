export interface Bar {
	count: number;
}
export type Bar2=Bar;

class ClsBar {
	a: Bar={
		count:15
	};
	b:string='Im bar';
	/**
	 * 注解测试
	 */
	setNumber(n:number):void {
		aNumber=n;
	}
}

export function who() {
	return 'foo2.ts';
}
export const Bar=new ClsBar();

export var aNumber=25;