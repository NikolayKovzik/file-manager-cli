import { cpus } from 'node:os';

export const handleCpus = () => {
	const cpusInfo = cpus().reduce((acc, curr) => {
		const speed = `${curr.speed * 0.001}GHz`;
		const cpu = {
			model: curr.model,
			speed
		};

		acc.push(cpu);
		return acc;
	}, []);

	console.log(`Overall amount of CPUS: ${cpus().length}`);
	console.table(cpusInfo);
};