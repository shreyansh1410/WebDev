function kiratAsyncFunction(){
    let p = new Promise(function(x){
        x("Hi there!");
    });
    return p;
}

function main(){
    kiratAsyncFunction().then(function(x){
        console.log(x);
    });
}

main();