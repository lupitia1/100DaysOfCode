//We are using EventEmitter through our custom class 'Logger'

const Logger = require('./logger');
const logger = new Logger();

//When we raise an event we need to have a listener
//Register a listener, it's important to do it before raise the event
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

//We use emit to raise an event
//raise = Making a noise or produce something- signalling
//emitter.emit('messageLogged', {id: 1, url: 'url'});
logger.log('message');

