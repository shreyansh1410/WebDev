const startTime  = Date.now();

setTimeout(()=>{
    const endTime = Date.now();
    console.log(`Time elapsed = ${endTime - startTime}`);
}, 2000);