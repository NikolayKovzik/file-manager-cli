import { homedir } from 'node:os';
import { getUserNameFromArgv, closeProcess, handleStdinOnData } from './utils/index.js';

const username = getUserNameFromArgv();
const greetingMsg = `Welcome to the File Manager, ${username}!\n`;
const goodbyeMsg = `Thank you for using File Manager, ${username}, goodbye!`;

process.chdir(homedir());
process.stdout.write(greetingMsg);
process.stdout.write(`You are currently in ${process.cwd()}\n`);

process.stdin.on('data', (data) => handleStdinOnData(data, goodbyeMsg));
process.on('SIGINT', () => closeProcess(goodbyeMsg));