const form =document.querySelector("form");
const fullName =document.getElementById("name");
const email =document.getElementById("email");
const phone =document.getElementById("phone");
const subject =document.getElementById("subject");
const message =document.getElementById("message");

function sendEmail(){
    const bodyMessage =`Full Name:${fullName.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br> Message:${message.value}`;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ananmarzana999@gmail.com",
        Password : "55BC13AC38D37EB8B59588C17AF05A9B874A",
        To : 'ananmarzana999@gmail.com',
        From : "ananmarzana999@gmail.com",
        Subject : subject.value,
        Body : bodyMessage,
        
    }).then(
      message => alert(message)
    ); 
}
form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
});
console.log(658464354)