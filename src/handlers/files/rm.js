import { unlink } from 'node:fs/promises';
import { resolve } from 'node:path';

export const rm = async (pathToFile) => {
	const resolvedPathToFile = resolve(pathToFile);

	await unlink(resolvedPathToFile);
};