// 宣告: foo.d.ts
var Bar={
	a:{
		count:5
	},
	b:'im bar',
	setNumber(n) {
		aNumber=n;
	}
}

function who() {
	return 'foo.js'
}
var aNumber=5;
module["exports"]={
	Bar,
	aNumber,
	who
}

