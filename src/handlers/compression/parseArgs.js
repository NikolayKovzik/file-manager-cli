import { parse, resolve } from 'node:path';
import { brotliExtension, compressionFlags } from '../../constants/index.js';

const { compress, decompress } = compressionFlags;

export const parseArgs = (pathToFile, pathToDestination, flag) => {
	let resolvedDestPath;
	const resolvedFilePath = resolve(pathToFile);
	const { name, ext } = parse(resolvedFilePath);

	switch (flag) {
		case compress:
			resolvedDestPath = resolve(pathToDestination, `${name}${ext}${brotliExtension}`);
			break;
		case decompress:
			resolvedDestPath = resolve(pathToDestination, name);
			break;
	}

	return [ resolvedFilePath, resolvedDestPath ];
};
