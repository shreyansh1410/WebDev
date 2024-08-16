//initialising a promise:
var d = new Promise(function(onDone){

});

console.log(d); //promise: pending


const fs = require('fs');
// import fs from 'fs';
//with Promises: (NO CALLBAKCS NEEDED)

//my own asynchronous function:
function kiratsReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        });
    });
}

//callback function to call:

function onDone(data){
    console.log(data);
}

kiratsReadFile().then(onDone);