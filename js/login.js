
document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    if(email==='tuaha@gmail.com' && password ==='123')
    {
        window.location.href='bank.html';


    }
    else{
        alert('Error')
    }
    
})