//splice():Remove elements from an array and if necessary inserts new elements in their place,returning the deleted elements

//syntax: splice(start_index,delet_count)
//ex1:
var ar=[10,20,30,40,50]
console.log(ar)  //[10,20,30,40,50]
ar.splice(1,2)  
console.log(ar)  //[10,40,50]


var ar=[10,20,30,40,50]
console.log(ar) //[10,20,30,40,50]
ar.splice(1,0)  
console.log(ar) //[10,20,30,40,50]


//syntax2: splice(start_index,delete_count,item_to_be_added)
var ar=[10,20,30,40,50]
console.log(ar) //[10,20,30,40,50]
ar.splice(2,1,100,200,300,400)  
console.log(ar) //[10,20,100,300,400,40,50]
