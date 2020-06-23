
type MsgFunction = (message?: any, ...optionalParams: any[]) => void;

type ConsoleBrfType = {
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

type _Console = ConsoleFunType & ConsoleBrfType;
export const _console: _Console;
// 以下declare可以使ts档案内使用如 console.log('there is a ' + 'info'.info + ' e\n'.e);
declare global {
	interface Console extends ConsoleBrfType { }

	interface String {
		info: string;
		i: string;

		error: string;
		e: string;

		warn: string;
		w: string;

		debug: string;
		d: string;
	}

	interface String {
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
	interface Number extends String { }
}
