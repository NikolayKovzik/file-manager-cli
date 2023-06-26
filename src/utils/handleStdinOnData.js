import { closeProcess, handleLine } from './index.js';

export const handleStdinOnData = async (chunk, message) => {
	const chunkStringified = chunk.toString().trim();
	if (chunkStringified.includes('.exit')) {
		closeProcess(message);
	}

	await handleLine(chunkStringified);
};