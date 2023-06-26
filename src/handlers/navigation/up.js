import { join } from 'node:path';

export const up = () => {
	const upPath = join(process.cwd(), '..');
	process.chdir(upPath);
};