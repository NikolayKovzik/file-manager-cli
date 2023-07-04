import { up, cd, ls } from '../handlers/navigation/index.js';
import { handleOs } from '../handlers/os/index.js';
import { calcHash } from '../handlers/hash/index.js';
import { handleCompression } from '../handlers/compression/index.js';
import { cat, add, rn, move, rm } from '../handlers/files/index.js';
import { parseLine, validateLine } from './index.js';
import { compressionFlags, executionErrorMsg } from '../constants/index.js';

const { decompress } = compressionFlags;

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
			case 'cat': {
				await cat(...args);
				break;
			}
			case 'add': {
				await add(...args);
				break;
			}
			case 'rn': {
				await rn(...args);
				break;
			}
			case 'cp': {
				await move(...args, true);
				break;
			}
			case 'mv': {
				await move(...args);
				break;
			}
			case 'rm': {
				await rm(...args);
				break;
			}
			case 'os': {
				await handleOs(...args);
				break;
			}
			case 'hash': {
				await calcHash(...args);
				break;
			}
			case 'compress': {
				await handleCompression(...args);
				break;
			}
			case 'decompress': {
				await handleCompression(...args, decompress);
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
		process.stdout.write(`You are currently in ${process.cwd()}\n`);
	}
};