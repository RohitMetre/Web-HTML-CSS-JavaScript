var person= function(fname,lname)
{
  console.log("Inside Function Consturctor")
  this.fname=fname
  this.lname=lname 
  return this.fname+" "+this.lname
}
var p1=new person("Java","Script")
console.log(p1)
console.log(typeof(p1))
console.log(p1.fname+" "+p1.lname)