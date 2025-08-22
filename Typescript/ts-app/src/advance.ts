// interface User {
// 	name: string;
// 	age: number;
// }

// function sumOfAge(user1: User, user2: User) {
//   return user1.age + user2.age;
// };

// // Example usage
// const result = sumOfAge({
// 	name: "harkirat",
// 	age: 20
// }, {
// 	name: "raman",
// 	age: 21
// });
// console.log(result); // Output: 9



interface User {
    name: string,
    age: number
}

function ageSum(user1: User, user2: User){
    return user1.age + user2.age
}

const result = ageSum({
    name: "Harkirat",
    age: 34
}, {
    name: "Harry",
    age: 34
})

console.log(result)