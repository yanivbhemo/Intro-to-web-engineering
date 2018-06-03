function ChangeText(){
    console.log("We are in the function");
    var title=document.getElementById("pageTitle").innerHTML;
    
    if(title == "Our Products")
        document.getElementById("pageTitle").innerHTML="Our services";
    else
        document.getElementById("pageTitle").innerHTML="Our Products";
}