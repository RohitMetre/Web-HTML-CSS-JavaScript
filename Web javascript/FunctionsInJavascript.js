//Function as Declaration

//Input & Output function

function display1(a,b)
{
  console.log("Inside Display()")
  return a+b
}
console.log(display1(20,10))


//Fuction as Expression

//Input & Output function

var display2=function(a,b)
{
  console.log("Inside Display()")
  return a-b
}
console.log(display2(20,10))


//Function as Arrow Function
//Input and output

var display3=(a,b)=>
{
  console.log("Inside Display()")
  return a*b
}
console.log(display3(20,10))


