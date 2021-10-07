console.log("Welcome to email validation");

let emailRegex = RegExp("^abc([.+\\-_][a-zA-Z0-9]+)?@bridgelabz.co(.[a-z]{2})$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log("Valid Email");
    else
        throw 'Invalid email';
}

try{
    validateEmail("abc.xyz@bridgelabz.co.in");
    validateEmail("qwer");
}catch(e){
    console.error(e);
}