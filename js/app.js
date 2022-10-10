
const submit = document.querySelector('.submit');


document.getElementById('formLogin').addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;

    if(email.length < 3) {
        alert('Invalid Email');
        return;  
    };
    if (password.length < 6){
        alert('Invalid Password');
        return;
    }
 
});