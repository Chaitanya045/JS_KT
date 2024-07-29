async function fn(){
    setTimeout(function (){
        console.log("I am an async function")
    }, 2000)
}


fn().then(function (){
    console.log("Promise resolved")
})
