const fs = require('fs');
/*
All methods come in pairs (Asynchronous | Synchronous)
*/ 
//Sync read of the files in this folder
const files = fs.readdirSync('./');
console.log('Sync read: ', files);

//Async read of the files in this folder, using callback function
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err)
    else console.log('Async read', files);
}
);

