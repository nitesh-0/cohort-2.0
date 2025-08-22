
// //Interfaces
// const user = {
//     firstName: "Harkirat",
//     lastName: "Singh",
//     email: "harkirats123@gmail.com",
//     age: 32
// }

// interface User {
//     firstName: string,
//     lastName: string,
//     email: string,
//     age: number
// }

// function isLegal(user: User): boolean{
//     if(user.age > 18){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isLegal(user))


//Types, almost same as interface
// type User = {
//     firstName: string,
//     lastName: string,
//     email: string,
//     age: number
// }

// const user = {
//     firstName: "Harkirat",
//     lastName: "Singh",
//     email: "harkirats123@gmail.com",
//     age: 32
// }

// function isLegal(user: User): boolean{
//     if(user.age > 18){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isLegal(user))

//Special use case of types, we can define the type of a variable as two options called as UNIONS, below is the example

type greeting =  number | string 

function greet(id: greeting){
    console.log(id)
}

greet("Hi")
greet(2)


// Intersection
type employee = {
    name: string,
    startDate: number
}

type manager = {
    name: string,
    department: string
}

type TeamLead = manager & employee

function greeter(t: TeamLead){
    console.log(t.department)
    console.log(t.startDate)
}

greeter({
    name: "Harkirat",
    department: "HR",
     startDate: 2025
})