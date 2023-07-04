import { rename } from 'node:fs/promises';
import { parse, resolve } from 'node:path';

export const rn = async (pathToFile, newFilename) => {
	const resolvedPathToFile = resolve(pathToFile);
	const { dir } = parse(resolvedPathToFile);
	const newPathToFile = resolve(dir, newFilename);

	await rename(resolvedPathToFile, newPathToFile);
};