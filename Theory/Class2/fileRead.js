const fs = require('fs');
//filesystem module

//asynchronous function:
// fs.readFile("a.txt", "utf-8", function(err, data){
//   console.log(data);
// })

// console.log("hi there"); 

// let a = 0;
// for(let i=0; i<10000000000; i++){
//   a++;
// }
// console.log("hi there 2")

//CUSTOM ASYNCHRONOUS FUNCTION:
function kiratsReadFile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data);
    })
}

//callback function to call
function onDone(data){
    console.log(data);
}

kiratsReadFile(onDone);