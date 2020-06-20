namespace X {
	export interface Y { }
	export class Z { }
}

// ... elsewhere ...
namespace X {
	export var Y: number;
	export namespace Z {
		export class C { }
	}
}
type X = string;
