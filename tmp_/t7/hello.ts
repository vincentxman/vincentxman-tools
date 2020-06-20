
type User = {
	name: string;
	age: number;
	id: number;
};

type Fun=(a:number,b:string,c:any)=>string;
type FunArgs=Parameters<Fun>;


type User8 = NonNullable< string | number | undefined | null>;
type User7 = Extract<"name" | "id", "name2" | "id">;
type User6 = Exclude<"name" | "id", "name2" | "id">;
type User5 = Record<'teacher' | 'student', User>;
type User4 = Readonly<User>;
type User3 = Omit<User, "id"|"id2">;
type User2 = Pick<User, "name" | "id">;
type User11 = Required<User1>;
type User1 = Partial<User>;

var oo = {
	name: 'peter',
	age: 2.5,
	id: 1,
	salary:256
}

function getProperty<T,K extends keyof T>(obj:T,name:K) {
	return obj[name];
}

var r1=getProperty(oo,'name');
var r2=getProperty<User,keyof User>(oo,'name');
console.log(r1==r2);

//
