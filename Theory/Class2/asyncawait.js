function kiratAsyncFunction(){
    return new Promise(function(resolve){
        resolve("Hello world!")
    } );
}

async function main(params) {
    let val = await kiratAsyncFunction();
    console.log(val);
}

main();