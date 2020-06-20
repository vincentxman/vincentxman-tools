class Human {
	constructor(name: string = '', age: number = 0, stature: number = 0, nationality: string = '') {
		this.nationality = nationality;
		this.stature = stature;
		this.name = name;
		this.age = age;
		Human.times += 1;          // 静态类型属性，记录构造函数方法被调用的次数
	}

	public name: string;           // 公有属性
	private stature: number;       // 私有属性
	protected age: number;         // 保护属性
	static times: number = 0;      // 静态属性
	readonly nationality: string;  // 只读属性

	get_stature() {
		return this.stature;
	}

	get_times() {
		console.log(Human.times);
	}
}

class Teacher extends Human {
	constructor(name: string, age: number, stature: number, nationality: string, subject: string) {
		super(name, age, stature, nationality);
		this.subject = subject;
	}

	subject: string;

	set_age(age: number) {
		this.age = age;
	}

	get_subject() {  // 定义公有方法
		return this.subject;
	}
}

const teacher = new Teacher('华', 93, 185, 'US', 'English');
const aa=teacher.get_times();
console.log(teacher);

