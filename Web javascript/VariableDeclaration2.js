//VARIABLE DECLARATION



//VAR,LET AND CONST KEYWORD

//VAR KEYWORD
//ACCESSING VARIABLE OUTSIDE THE SCOPE OR BLOCK

{
var a=10
console.log("Inside the Scope="+a)  //Inside the scope=10
}
console.log("Outside the Scope="+a)  //Outside the scope=10


//Note: Variable declared using var keyword can be accessed outside the scope or the block.


//LET KEYWORD
//ACCESSING VARIABLE OUTSIDE THE SCOPE OR BLOCK

{
    let a=10
    console.log("Inside the Scope b ="+b)  //Inside the scope=10
    }
    console.log("Outside the Scope b="+b)  //Reference Error: b is not defined
    
    
    //Note: Variable declared using let keyword can be accessed outside the scope or the block.



//CONST KEYWORD
//ACCESSING VARIABLE OUTSIDE THE SCOPE OR BLOCK

{
    const a=10
    console.log("Inside the Scope c="+c)  //Inside the scope=10
    }
    console.log("Outside the Scope c="+c)  //Reference Error: c is not defined
    
    
    //Note: Variable declared using const keyword can be accessed outside the scope or the block.

    