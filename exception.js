// expr="%26+76*9";
// console.log(eval(expr))
// console.log('data transmitted '+ eval(expr));


//try catch

// expr="%26+76*9";
// try{
//     console.log(eval(expr))
// }
// catch{
//     console.log("error")
// }
// console.log("data transmitted"+eval(expr));

//try-catch-finally

expr="%26+76*9";
try{
    console.log("try block")
    console.log(eval(expr))
}
catch{
    console.log('catch block')
    console.log("error")
    expr="26+76*9"
    console.log(eval(expr))
}
finally{
    console.log("finally block")
    console.log('always executed');
}
console.log("data transmitted "+eval(expr));
