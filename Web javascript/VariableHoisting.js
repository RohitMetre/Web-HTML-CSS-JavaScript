//Variable hoisting is a process of moving the declaration

//Ex:1
/*
var fun=function()
{
    a=10
    console.log(a)   //10 
}

fun()


*/


//To avoid variable hoisting we have to use one expression i.e "use stict"inside the function

//Ex:2

var fun=function()
{
    "use strict"
     a=10
    console.log(a)   //Error: a is not defined
}
fun()

