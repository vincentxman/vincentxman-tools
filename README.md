# vincentxman-tools

Mini lightweight console color logger.

## install

```bashell
> npm install vincentxman-tools 
```

## demo.js
```javascript
// demo.js
require("vincentxman-tools");

console.i("console.info");
console.e("console.error");
console.w("console.warn");
console.d("console.debug\n");

console.log("there is a " + "info".info + " e\n".e);
console.log("there is a ".black.whiteBG + "warn\n".blue.yellowBG.bold);
```

## demo.ts
```javascript
// demo.ts
import { _console } from "vincentxman-tools";
_console.init();

console.i("console.info");
console.e("console.error");
console.w("console.warn");
console.d("console.debug\n");

console.log("there is a " + "info".info + " e\n".e);
console.log("there is a ".black.whiteBG + "warn\n".blue.yellowBG.bold);
```

---

## Style

|              | **function**                                                                                       |
| ------------ | :------------------------------------------------------------------------------------------------- |
| _color_      | white<br />grey<br />black<br />blue<br />cyan<br />green<br />magenta<br />red<br />yellow        |
| _background_ | whiteBG<br />blackBG<br />blueBG<br />cyanBG<br />greenBG<br />magentaBG<br />redBG<br /> yellowBG |
| _style_      | bold<br />italic<br />underline<br />inverse<br /> strikethrough                                   |
| _log_        | info<br/>i<br/>debug<br/> d<br/> error<br/> e<br/> warn<br/> w                                     |
