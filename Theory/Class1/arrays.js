//print the even numbers in an array

let count = 0;
const ages = [23, 43, 12, 78, 36];
for(let i=0;i<ages.length;i++){
    if(ages[i] % 2==0)
        count++;
}
console.log(count);