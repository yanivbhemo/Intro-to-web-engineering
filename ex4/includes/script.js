(function() {
  setInterval(function() {
    var curr_val = document.getElementById("counter").innerHTML;
    curr_val = parseInt(curr_val,10) + 1;
    document.getElementById("counter").innerHTML=curr_val;
  }, 3000);
  
  function CheckIfPassEqual(){
    if(document.getElementById("pass").value != document.getElementById("validpass").value){
      document.getElementById("validation_err").innerHTML="* Password are not matched!";
      return false;
    }
    else {
      return true;
    }
  }
  
  function CheckIfEmailEqual(){
    if(document.getElementById("email").value != document.getElementById("validemail").value){
      document.getElementById("validation_err").innerHTML="* Emails are not matched!";
      return false;
    }
    else {
      return true;
    }
  }
  
  document.getElementById("myForm").onsubmit = function() { if(!CheckIfPassEqual()) return false; else return true;
                                                            if(!CheckIfEmailEqual()) return false; else return true;
                                                          };
  
})();