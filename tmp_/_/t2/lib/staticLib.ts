var x=5;
const area = function (radius: number): number {
	return Math.PI * radius * radius;
}
export const area2 = function (radius: number): number {
	return Math.PI * radius * radius;
}

export function circumference(radius: number): number {
	return 2 * Math.PI * radius;
}

export {area};
export default area2;