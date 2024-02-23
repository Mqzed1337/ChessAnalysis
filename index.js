console.log('hello world')
const stockfish = require('stockfish@16.0.0');
const engine = stockfish();
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('happy', () => {

    console.log('started');
});



engine.onmessage = function(event) {
    console.log(event); // Logs the output from the Stockfish engine
};

engine.postMessage('uci'); // Sends the 'uci' command to the engine