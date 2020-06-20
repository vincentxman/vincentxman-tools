class Foo {
	x: number;
	constructor(x:number) {
		this.x=x;
	}
}
// ... elsewhere ...
interface Foo {
	y: number;
}

var obj=new Foo(5);
obj.y=20;
console.log(obj);

