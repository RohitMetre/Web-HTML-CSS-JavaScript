//Object-orientation in javascript

class parent
{
    constructor(a,b)
    {
        console.log("Inside parent constructor"+(a+b))
    }
    fun()
    {
        console.log("Parent fun()")
    }
}

class child extends parent
{
    constructor(fname,lname)
    {
      super(10,20)
      console.log("Inside child constructor")
      this.fname=fname
      this.lname=lname
    }
    fun1()
    {
        console.log("child fun()"+this.fname+" "+this.lname)
    }
}
 c1=new child("Johnny","Depp")
 c1.fun()
c1.fun1()