
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

export const tools: Tools;
export const _console: _Console;