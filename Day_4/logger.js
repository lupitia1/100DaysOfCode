const EventEmitter = require('events');

//var url = "http://mylogger.io/log";

//We create a custom class that extends EventEmitter and we are going to use
//this one instead EventEmitter in our using_event_emmiter.js file
class Logger extends EventEmitter {

    //method
    log(message){
        //Send an HTTP request
        console.log(message);

        //Raise an event
        this.emit('messageLogged', {id: 1, url: 'url'});
    }
}

module.exports = Logger;