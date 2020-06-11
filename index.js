
"use strict";

// Static import, when module ['exports'] has no output
var EXPORTS = {
	_console: require('./lib/console-color') // _console = undefined (_console has no effect)	
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