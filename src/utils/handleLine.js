import { up, cd, ls } from '../handlers/nwd/index.js';
import { getCwdMsg } from './getCwdMsg.js';
import { parseLine, validateLine } from './index.js';
import { compressionFlags, executionErrorMsg } from '../constants';

export const handleLine = async (line) => {
	try {
		const [ command, args ] = parseLine(line);
		validateLine(command, args);

		switch (command) {
			case 'up': {
				up();
				break;
			}
			case 'cd': {
				cd(...args);
				break;
			}
			case 'ls': {
				await ls();
				break;
			}
		}
	} catch (error) {
		if (error instanceof SyntaxError) {
			process.stdout.write(error.message);
		} else {
			process.stdout.write(executionErrorMsg);
		}
	} finally {
		process.stdout.write(getCwdMsg());
	}
};