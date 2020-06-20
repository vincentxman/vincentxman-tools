// 宣告
interface IA {
	name: string;
	age?: number;
}
type TyUser = {
	name: string;
	age?: number;
}

// 接口函数
interface IFun {
	(name: string, age: number): IA;
}
type TyFun = (name: string, age?: number) => TyUser;


// 继承
interface IA2 extends IA {
	salary: number;
}
type TyUser2 = TyUser & { salary: number };


// interface extends type (接口继承类型)
interface IA3 extends TyUser {
	salary: number;
}

// type extends interface (类型继承接口)
type TyUser3 = TyUser & IA;

// type 可以而 interface 不行
type BaseName = string; 			// 基本类型别名
type TyUser4 = TyUser | TyUser2; 		// 联合类型
type UserList = [TyUser, TyUser2] 	// 元祖类型

// interface 可以而 type 不行, interface 能够声明合并
interface Point {		// interface 能够声明合并
	x:number;
}
interface Point { 		// interface 能够声明合并
	y:number;
}