var x=5;
// 静态加载
import { area } from './lib/staticLib'

console.log('staticLib: 静态载入 area=',area(2.5));


// 动态加载
import('./lib/dynLib') // dyLib.ts
	.then(m => {
		m.say('动态载入');
	})
	.catch(err => {
		console.log(err);
	});

// 动态加载
import('./lib/dynJs') // dyJs.d.ts
	.then(m => {
		m.run('动态载入');
	})
	.catch(err => {
		console.log(err);
	});

