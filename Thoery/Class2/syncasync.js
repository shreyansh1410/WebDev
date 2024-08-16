function findSum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++){
      ans += i;
    }
    return ans;
  }
  
  function findSumTill100(){
    console.log(findSum(100));
  }
  
  //synchronous function:
  function syncSleep(){
    let a = 1;
    for(let i = 0; i < 10000000000; i++){
      a++;
    }
  }
  
  // asynchronous function:
  setTimeout(findSumTill100, 1000)
  
  // findSumTill100();
  // syncSleep();
  console.log("hello world");