interface Foo {
	x: number;
}
// ... elsewhere ...
interface Foo {
	y: number;
}
let a: Foo = {
	x:5,
	y:6
}
console.log(a.x + a.y); // OK