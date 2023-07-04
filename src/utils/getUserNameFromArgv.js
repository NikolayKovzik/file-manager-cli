import { incorrectArgumentMsg } from '../constants/index.js';
import { closeProcess } from './closeProcess.js';

export const getUsernameFromArgv = () => {
	const args = process.argv.slice(2);
	if (!args.length || args.length > 1 || !args[0].includes('--username')) {
		closeProcess(incorrectArgumentMsg);
	}

	const [, value] = args[0].split('=');
	if (!value) {
		closeProcess(incorrectArgumentMsg);
	}

	return value;
};