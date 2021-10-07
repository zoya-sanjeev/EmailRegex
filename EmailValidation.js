console.log("Welcome to email validation");

let emailRegex = RegExp("^abc$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log("Valid Email");
    else
        throw 'Invalid email';
}

try{
    validateEmail("abc");
    validateEmail("qwer");
}catch(e){
    console.error(e);
}