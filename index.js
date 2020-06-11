
"use strict";

// 静态带入，module['exports'] 没有输出时
var EXPORTS = {
	_console: require('./lib/console-color') // _console = undefined 没有作用	
}

// 动态载入， 第一次使用时才载入
var dynamicLib = {
	"tools": './lib/vincentxman-tools',
	"crash": null
}

for (var key in dynamicLib) {
	var props={};
	(function(aKey){
		Object.defineProperty(EXPORTS, aKey, {
			configurable: true,
			get: function () {				
				return props[aKey]==null? (props[aKey]=require(dynamicLib[aKey])):props[aKey];
			}
		});
	})(key)
}

module['exports'] = EXPORTS;