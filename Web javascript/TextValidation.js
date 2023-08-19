var textvalidation=function()
{
    var res=document.getElementById("fname").value
    if(res==0)
    {
        document.getElementById("msg").innerHTML="Fname is required!"
        return false
    }
   else if(res.length<=2)
    {
        document.getElementById("msg").innerHTML="Fname must be more then 3 characters!!!"
        return false
    }
    else if(res.length>15)
    {
        document.getElementById("msg").innerHTML="Fname mustnot exceed more than 15 characters!!!"
        return false
    }
}