const btnSuscribe = document.querySelector('.submit-btn');
const inputEmail = document.querySelector('.mail-form');
const textoError = document.querySelector('.error-msg');
const loginContainer = document.querySelector('.login-card');
const suscribingSuccessful = document.querySelector('.snd-card');


function validarEmail(email) {
    let formatoEmail = /\S+@\S+\.\S+/;
    return formatoEmail.test(email);
  }

btnSuscribe.addEventListener('click', () =>{
    const email = inputEmail.value;
    if(email === ""){
        textoError.classList.remove('none');
        inputEmail.classList.add('error-form');
    }
    else if (!validarEmail(email)){
        textoError.classList.remove('none');
        inputEmail.classList.add('error-form');
    }
    else{
        loginContainer.classList.add('none');
        suscribingSuccessful.classList.remove('none');
        let thanksText = document.querySelector('.thanks-text');
        thanksText.innerHTML = `A confirmation email has been sent to <span class="bold-text">${email}</span>. 
        Please open it and click the button inside to confirm your subscription.`
    }
})