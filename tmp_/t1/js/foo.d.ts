// 实现: foo.js
export * from './interface'
export interface Bar {
	count: number;
}
export const Bar: { 
	a: Bar, 
	b:string,
	setNumber(n:number):void
};

export var aNumber:number;

export function who():void;