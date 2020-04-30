//require mongoose module
var mongoose = require('mongoose');

var chalk = require('chalk');

var dbURL = require('./properties').DB;

var connected =chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnect = chalk.bold.red;
var termination = chalk.bold.magenta;

module.exports = function(){
    mongoose.connect(dbURL);

    mongoose.connection.on('connected',()=>{
        console.log(connected("Mongoose default connection is open to "+dbURL));
    });

    mongoose.connection.on('error',(err)=>{
        console.log(error("Mongoose default connection has occurred "+err+" error"))
    });

    mongoose.connection.on('disconnect',()=>{
        console.log(disconnect("Mongoose default connection is Disconnected"))
    });

    process.on('SIGINT',()=>{
        mongoose.connection.close(()=>{
            console.log(termination("Mongoose default connection is closed due to application termination"));
            process.exit(0);
        });
    });



}