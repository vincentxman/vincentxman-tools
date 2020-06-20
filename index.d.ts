
declare class Tools {
	fun(): void;
	fun2(): void;
}

declare class _Console {
	i(...args: any[]): void;
	info(...args: any[]): void;

	e(...args: any[]): void;
	error(...args: any[]): void;

	w(...args: any[]): void;
	warn(...args: any[]): void;

	d(...args: any[]): void;
	debug(...args: any[]): void;
}

// 以下declare可以使ts档案内使用如 console.log('there is a ' + 'info'.info + ' e\n'.e);
declare global {
	interface Console {
		i(...args: any[]): void;
		e(...args: any[]): void;
		w(...args: any[]): void;
		d(...args: any[]): void;
	}
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
	interface Number {
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
	interface Number {
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
}

export const tools: Tools;
export const _console: _Console;