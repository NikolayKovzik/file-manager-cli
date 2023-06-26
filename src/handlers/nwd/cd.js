import { resolve, parse, sep } from 'node:path';
import { platform } from 'node:os';

const isWin = platform() === 'win32';

export const cd = (path) => {
	const destPath = resolve(path);
	const destRoot = parse(destPath).root;
	const isPathEqualsToPathRoot = path.toLowerCase() === destRoot.toLowerCase().split(sep)[0];

	if (isWin && isPathEqualsToPathRoot) {
		process.chdir(destRoot);
		return;
	}

	process.chdir(destPath);
};