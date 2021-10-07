console.log("Welcome to email validation");

let emailRegex = RegExp("^abc@bridgelabz.co$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log("Valid Email");
    else
        throw 'Invalid email';
}

try{
    validateEmail("abc@bridgelabz.co");
    validateEmail("qwer");
}catch(e){
    console.error(e);
}