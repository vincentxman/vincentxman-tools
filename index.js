
"use strict";

// Static import, when module ['exports'] has no output
var EXPORTS = {
	_console: require('./lib/console-color') //因为有用到 defineProperty 从定义console. 所以必须静态import
}

// Dynamic load, load only when used for the first time
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