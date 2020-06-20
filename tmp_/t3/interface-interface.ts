interface Foo {
	x: number;
}
// ... elsewhere ...
interface Foo {
	y: number;
}
let a: Foo = {
	x: 5,
	y: 10
}
console.log(a.x + a.y); // OK
