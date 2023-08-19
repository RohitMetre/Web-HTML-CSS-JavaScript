//Array Datatype in javascript

var ar=[10,20,30,40,50]
console.log(ar)
console.log(typeof(ar))

var ar1=[10,20.99,"kodnest",true,null]
console.log(ar1)
console.log(typeof(ar1))

//add elements to an array

ar[3]="New_value"
console.log(ar)

//Methods in array

//push():New elements to add to the array.

//Appends new elements to the end of an array, and returns the new length of the array.

ar.push(100)
console.log(ar)  //[10,20,30,'New_value',50,100]


//unshift(): Inserts new elements at the start of an array, and returns the new length of the array.

ar.unshift(999)
console.log(ar) //[999,10,20,30,'New_value',50,100]


//Delete the element from the array
//pop():Removes the last element from an array and returns it.

ar.pop()
console.log(ar)  //[999,10,20,30,'New_value',50]

//Shift:Removes the first element from an array and returns it. 

ar.shift()
console.log(ar) //[10,20,30,'New_value',50]



//splice():Remove elements from an array and if necessary inserts new elements in their place,returning the deleted elements

//syntax: splice(start_index,delet_count)
//ex1:
var ar=[10,20,30,40,50]
console.log(ar)  //[10,20,30,40,50]
ar.splice(1,2)  
console.log(ar)  //[10,40,50]

//syntax2: splice(start_index,delete_count,item_to_be_added)
var ar=[10,20,30,40,50]
console.log(ar) //[10,20,30,40,50]
ar.splice(1,0)  //(2,1,100,200,300,400)
console.log(ar) //[10,20,100,200,300,400,40,50]







