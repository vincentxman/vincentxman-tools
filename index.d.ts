
declare class Tools {
	fun(): void;
	fun2(): void;
}

type MsgFunction = (message?: any, ...optionalParams: any[]) => void;

type ConsoleBrief={
	i: MsgFunction;
	e: MsgFunction;
	w: MsgFunction;
	d: MsgFunction;
}

declare interface _Console extends ConsoleBrief {
	info: MsgFunction;
	error: MsgFunction;
	warn: MsgFunction;
	debug: MsgFunction;
}

// 以下declare可以使ts档案内使用如 console.log('there is a ' + 'info'.info + ' e\n'.e);
declare global {
	interface Console extends ConsoleBrief { }

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

export const vtools: Tools;
export const _console: _Console;