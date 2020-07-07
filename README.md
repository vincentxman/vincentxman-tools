# vincentxman-tools
Mini lightweight console color logger.
## install
```bashell
> npm install vincentxman-tools -S
```

## demo.js
```javascript
require('vincentxman-tools'); 

console.i('console.info');
console.e('console.error');
console.w('console.warn');
console.d('console.debug\n');

console.log('there is a ' + 'info'.info + ' e\n'.e);
console.log('there is a '.black.whiteBG + 'warn\n'.blue.yellowBG.bold);
```

## demo.ts
```javascript
import { _console} from 'vincentxman-tools'; 
_console.init();

console.i('console.info');
console.e('console.error');
console.w('console.warn');
console.d('console.debug\n');

console.log('there is a ' + 'info'.info + ' e\n'.e);
console.log('there is a '.black.whiteBG + 'warn\n'.blue.yellowBG.bold);
```