const inputEmail = document.querySelector('#email');

inputEmail.addEventListener('change', e => console.log('change', e.target.value));
inputEmail.addEventListener('input', e => console.log('input', e.target.value));
inputEmail.addEventListener('blur', e => console.log('blur', e.target.value));
inputEmail.addEventListener('focus', e => console.log('focus', e.target.value));

// const form = document.querySelector('.contact-form');

// form.addEventListener('submit', function(){

// });