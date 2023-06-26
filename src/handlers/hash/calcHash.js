import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';

export const calcHash = async (filePath) => {
	const resolvedPath = resolve(filePath);
	const file = await readFile(resolvedPath);
	const hash = createHash('sha256').update(file).digest('hex');
	console.log(hash);
};