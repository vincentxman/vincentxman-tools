
type MsgFunction = (message?: any, ...optionalParams: any[]) => void;

type ConsoleFunBrfType = {
	i: MsgFunction;
	e: MsgFunction;
	w: MsgFunction;
	d: MsgFunction;
}

type ConsoleFunType = {
	info: MsgFunction;
	error: MsgFunction;
	warn: MsgFunction;
	debug: MsgFunction;
}

type ConsoleFunInitType = {
	init: () => void;
}

type _Console = ConsoleFunType & ConsoleFunBrfType & ConsoleFunInitType;
export const _console: _Console;
// 以下declare可以使ts档案内使用如 console.log('there is a ' + 'info'.info + ' e\n'.e);

type LogPropertyType = {
	info: string;
	i: string;

	error: string;
	e: string;

	warn: string;
	w: string;

	debug: string;
	d: string;
}

type ClrPropertyType = {
	italic: string;
	underline: string;
	inverse: string;
	strikethrough: string;
	white: string;
	grey: string;
	black: string;
	blue: string;
	cyan: string;
	green: string;
	magenta: string;
	red: string;
	yellow: string;
	whiteBG: string;
	greyBG: string;
	blackBG: string;
	blueBG: string;
	cyanBG: string;
	greenBG: string;
	magentaBG: string;
	redBG: string;
	yellowBG: string;
}
type LogColorProType = LogPropertyType & ClrPropertyType;
declare global {
	interface Console extends ConsoleFunBrfType { }
	interface String extends LogColorProType { }
	// interface Number extends LogColorProType { }
}
