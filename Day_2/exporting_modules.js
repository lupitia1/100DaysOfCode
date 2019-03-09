const url = 'bit.ly/PatyAlvarenga';

//This is the function 'log'
const log = (message) => {
    console.log(message);
};

//Here what we are doing is export the function 'log' 
//and it's going to be available from other modules

module.exports = log;
