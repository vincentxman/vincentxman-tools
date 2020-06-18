
"use strict";

// 静态导入
var EXPORTS = {
	_console: require('./lib/console-color') //因为有用到 defineProperty 从新定义console. 所以必须静态import
}

// 动态导入, 仅在首次使用时才加载
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