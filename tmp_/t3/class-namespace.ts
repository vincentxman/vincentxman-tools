class C {
	vvvv:string="ClsC";
	private vvvv2:string="private";
	static sss:string="staticC";
}

namespace C {
   export let x: number=5;
   export let str: string;
}

let y = C.x; // OK
console.log(y);

C.str="myStr";

console.log(C);

var aaa=new C();
console.log(aaa);




