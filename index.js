console.log('hello world')
const { EventEmitter } = require('events');
const EventEmitter = new EventEmitter();

eventEmitter.on('start', () => {

    console.log('started');
});

globalThis.yes = '23'

console.log(globalThis.yes)