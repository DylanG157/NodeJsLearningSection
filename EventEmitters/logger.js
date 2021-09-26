const EventEmitter = require('events');
// const emitter = new EventEmitter(); because this is declare in the class this is no longer needed

let url = 'http://myLogger.io/log'

//When declaring a name for a class:
//The first letter must be Upper Case
class Logger extends EventEmitter {
    //when declaring a function in a class you dont need the 'function' key word
    log(message){
        console.log(message)
        //Because 'EventEmitter has been added to the class it can be refered to with the 'this' keyword
        this.emit('messageLogged', {id:1, url: 'http://'})
    }
}



module.exports = Logger
