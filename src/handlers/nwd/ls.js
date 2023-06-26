import { readdir } from 'node:fs/promises';
import { sortByField } from '../../utils/index.js';

export const ls = async () => {
	const cwd = process.cwd();
	const cwdEntities = await readdir(cwd, { withFileTypes: true });
	const files = [];
	const directories = [];
	const links = [];
	const unknown = [];

	for (const cwdEntity of cwdEntities) {
		const entity = {
			Name: cwdEntity.name,
			Type: 'unknown'
		};
		const isDirectory = cwdEntity.isDirectory();
		const isFile = cwdEntity.isFile();
		const isSymbolicLink = cwdEntity.isSymbolicLink();

		switch (true) {
			case isDirectory: {
				entity.Type = 'directory';
				directories.push(entity);
				break;
			}
			case isFile: {
				entity.Type = 'file';
				files.push(entity);
				break;
			}
			case isSymbolicLink: {
				entity.Type = 'link';
				links.push(entity);
				break;
			}
			default: {
				unknown.push(entity);
			}
		}
	}

	const identifiedEntities = [
		...sortByField(directories, 'Name'),
		...sortByField(files, 'Name'),
		...sortByField(links, 'Name'),
		...sortByField(unknown, 'Name')
	];
	console.table(identifiedEntities);
};