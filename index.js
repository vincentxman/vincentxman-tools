
"use strict";

// 静态导入
var EXPORTS = {
	_console: require('./lib/vnt_console') //因为有用到 defineProperty 重新定义global.Console. 所以必须静态import
}

// 动态导入, 仅在首次使用时才加载
var dynamicLib = {
	"vtools": './lib/vnt_tools',
	"crash": null
}

for (var key in dynamicLib) {	
	(function(aKey){
		Object.defineProperty(EXPORTS, aKey, {
			configurable: true,
			get: function () {				
				return require(dynamicLib[aKey]); // require 内部自己会做cache缓存
			}
		});
	})(key)
}

module['exports'] = EXPORTS;