import { EOL, homedir, userInfo, arch } from 'node:os';
import { handleCpus } from './index.js';
import { validationErrorMsg } from '../../constants/index.js';

export const handleOs = async (arg) => {
	switch (arg) {
		case '--EOL':
			console.log(JSON.stringify(EOL));
			return;
		case '--cpus':
			handleCpus();
			return;
		case '--homedir':
			console.log(homedir());
			return;
		case '--username':
			console.log(userInfo().username);
			return;
		case '--architecture':
			console.log(arch());
			return;
	}

	throw new SyntaxError(validationErrorMsg);
};