# [Node.js Quickstart](https://fireship.io/courses/javascript/node-basics/)

## Step 1 - [install node](https://nodejs.org/ko/)

```sh
> node -v
v12.16.3
```

## Step 2 - hello world

```ts
// index.js
console.log('hello world');
```

```sh
> node .
hello world

> node index.js
hello world

```

## Step 3 - Events & Emitters

```ts
// Create
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

// Handle
eventEmitter.on('lunch', () => {
	console.log('yum 🍣');
});

// Emit
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');

// yum 🍣
// yum 🍣
```

```ts
const { readFile, readFileSync } = require('fs');

// Blocking!
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt);

// Non-blocking
readFile('./hello.txt', 'utf8', (err, txt) => {
	console.log(txt);
});
```
