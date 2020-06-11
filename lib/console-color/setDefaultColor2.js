
let colorMap = {
	"info": 	(obj) => obj.green,
	"error": 	(obj) => obj.red,
	"warn":		(obj) => obj.yellow,
	"debug":	(obj) => obj.blue
}

for (let k in colorMap) {
	Object.defineProperty(Number.prototype, k, {
		configurable: true,
		get: function () {
			return colorMap[k](this);
		}
	});
	Object.defineProperty(String.prototype, k, {
		configurable: true,
		get: function () {
			//return Green(this);
			return colorMap[k](this);
		}
	});
}
