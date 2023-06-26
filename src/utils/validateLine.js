import { commandsList, validationErrorMsg } from '../constants/index.js';

export const validateLine = (command, args) => {
	if (!commandsList.includes(command)) {
		throw new SyntaxError(validationErrorMsg);
	}

	switch (command) {
		case 'up':
		case 'ls': {
			if (!args.length) {
				return;
			}
			break;
		}
	}

	throw new SyntaxError(validationErrorMsg);
};