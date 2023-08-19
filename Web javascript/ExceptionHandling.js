//Exception Handling in javascript

/*
//Example1

var fun=function()
{
    try
    {
      var a=10
      var b=0
      console.log(a/b)  //Infinity
    }
    catch(e)
    {
        alert("inside catch block")
    }
}
fun()


*/
/*
Note:-
     In javascript exception will not be generated if we divide anything with 0,rather it requests in Infinity

     */


     //Example1

var fun=function()
{
    try
    {
      var name="JHON"
      alert(name.toLowerCa())     //Exception is occured bcz we made mistake of name.toLowercase so it will go to catch block
    }
    catch(e)
    {
        alert("inside catch block")
    }
    finally
    {
        alert("Inside finally block")
    }
}
fun()
