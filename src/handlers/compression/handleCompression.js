import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { compressionFlags } from '../../constants/index.js';
import { parseArgs } from './index.js';
import { access } from 'node:fs/promises';

const { compress, decompress } = compressionFlags;

export const handleCompression = async (pathToFile, pathToDestination, flag = compress) => {
	const [ srcFile, destFile ] = parseArgs(pathToFile, pathToDestination, flag);
	await access(srcFile);

	let brotli;
	const rs = createReadStream(srcFile);
	const ws = createWriteStream(destFile);

	switch (flag) {
		case compress:
			brotli = createBrotliCompress();
			break;
		case decompress:
			brotli = createBrotliDecompress();
			break;
	}

	await pipeline(rs, brotli, ws);
};