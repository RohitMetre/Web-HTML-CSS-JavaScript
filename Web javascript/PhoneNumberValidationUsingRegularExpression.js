var textvalidation=function()
{
   {
       var res= document.getElementById("phone").value
        var regex=/^[6-9]{1}[0-9]{9}$/.test(res)

        if(regex==false)
        {
            document.getElementById("msg").innerHTML="Invalid Input"
            return false
        }
        }
    }



    /*
    test() compares the input with given regular expression

    test() will return true if the input is matching with the given regular expression or it retuns false.

    ->InnerHTML property is used to send the data from javascript file to html file.

    ->value property is used to fetch the data from HTML to javascript file.

    ->getElementByID() is used to identify the html element in the document

    */