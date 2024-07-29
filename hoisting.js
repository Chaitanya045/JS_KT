// console.log(global)
// console.log('--------------------------------');
// console.log(this)



// real()
// function real(){
//     console.log("I am real. Always run me")
// }
// real()

// function real(){
//     console.log("😮 No. I am the real one")
// }

// real()

// function real(){
//     console.log("You both are wasted 😂😂")
// }

// real()

var fun = function(){
    console.log("I am a function")
}

fun()

console.log("1 ", varName)

var varName =  10
function b(){
    console.log("4 ", varName)
}


console.log("2 ", varName)

function fn(){
    console.log("3 ", varName)
    var varName = 20; 
    b()
    console.log("5 ", varName)
}

fn()



// Facatorial

// let a = function a(n){
//     if(n==0){
//         return 1
//     }
//     return n*a(n-1)
// }

// console.log(a(5))