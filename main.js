document.addEventListener("submit",(event)=>{
    event.preventDefault()
    let password= document.getElementById("exampleInputPassword1").value;
    let message=validatePassword(password)
    document.getElementById("message").textContent=message
})
function validatePassword(password) {
    // Minimum length
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
  
    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
  
    // At least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
  
    // At least one digit
    if (!/\d/.test(password)) {
      return "Password must contain at least one digit.";
    }
  
    // At least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character.";
    }
  
    return "Password is valid.";
  }
  
 
  

// const passwordlength=20
// const newpassword=generatePassword(passwordlength)
// console.log(newpassword);
