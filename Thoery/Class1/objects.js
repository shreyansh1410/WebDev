//creating an array: (strings / numbers)
const personArray = ["harkirat", 'raman', 'priya'];
const genderArray = ['male', 'male', 'female'];

for(let i=0;i<personArray.length;i++){
    if(genderArray[i]=='male')
        console.log(personArray[i]);
}

//creating an object:
const users1 = {
    firstName: "harkirat",
    lastName: "singh"
}
console.log(users1["firstName"]);
// users1["firstName"] (double quotes important) is the same as users1.firstName;

console.log();

//creating an array of objects:
const allUsers = [{
    firstName: "shreyansh",
    gender: "male",
}, {
    firstName: "raman",
    gender: "male",
}, {
    firstName: "priya",
    gender: "female",
}]

// console.log(allUsers[0].firstName);
for(let i=0;i<allUsers.length;i++){
    console.log(allUsers[i].firstName);
    console.log(allUsers[i].gender);
    console.log();
}