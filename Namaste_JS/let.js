

// // let a = 5
// // console.log(a)
// // var b = 7

// console.log("hi")
// // console.log(a)
// let a = 9
//  a = 3
//  console.log(a)

//  let x = "jkd"
//  x[0] = "k"
//  console.log(x[0])


// let a = 4;        // #001
// let b = a;        // b also points to #001
// a = 5;
// console.log(b)

// {
//     var a = 5
//     let b = 6
//     const c = 9
// }


function x(){

    var a = 10
    var b = 11
    var c = 12

    setTimeout(function y(){
        console.log(a)

        setTimeout(() => {
            console.log(b)

            setTimeout(() => {
                console.log(c)
            }, 1000)

        }, 1000)
        
    }, 1000)
}

x()