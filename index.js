const { readFile, readFileSync } = require('fs');

// Blocking!
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);

// Non-blocking
readFile('./hello.txt', 'utf8', (err, txt) => {
	console.log(txt);
});

// Promise based, also non-blocking
const { readFile } = require('fs').promises;

const txt = await readFile('./hello.txt', 'utf8');
