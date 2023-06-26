import { open } from 'node:fs/promises';
import { resolve } from 'node:path';

export const add = async (filename) => {
	let filehandle;
	try {
		const resolvedPath = resolve(filename);

		filehandle = await open(resolvedPath, 'wx');
	} catch (error) {
		throw error;
	} finally {
		await filehandle?.close();
	}
};