
// const x:number = 2
// console.log(x)

// function Greet(name: string){
//     console.log("Hello", name)
// }

// function sum(a: number, b: number): number {
//     return a+b
// } 

// function CheckVoter(age: number): boolean{
//     if(age> 18){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(CheckVoter(3))
// const a = sum(2, 3)
// console.log(a)

// Greet("Harkirat")





function showSum(sum: (a: number, b: number) => void){
    setTimeout(() => {
        console.log(sum(2, 3))
    }, 3000)
}

showSum(function sumCalculator(a: number, b: number){
    console.log(a+b)
}) 

function delay(fn: () => void){
    setTimeout(fn, 2000)
}

delay(function(){
    console.log("Hi There")
})