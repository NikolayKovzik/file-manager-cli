import { closeProcess } from './closeProcess.js';

export const getUserNameFromArgv = () => {
	const args = process.argv.slice(2);
  console.log(process.argv);
	if (!args.length || args.length > 1 || !args[0].includes('--username')) {
		closeProcess(`Please, run with username argument in format: --username=your_username\n`);
	}

	const [, value] = args[0].split('=');
	if (!value) {
		closeProcess(`Please, run with username argument in format: --username=your_username\n`);
	}

	return value;
};