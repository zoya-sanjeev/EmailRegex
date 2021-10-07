console.log("Welcome to email validation");

let emailRegex = RegExp("^abc@bridgelabz$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log("Valid Email");
    else
        throw 'Invalid email';
}

try{
    validateEmail("abc@bridgelabz");
    validateEmail("qwer");
}catch(e){
    console.error(e);
}