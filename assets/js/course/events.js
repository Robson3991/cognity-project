const btnSplit = document.querySelector('.btn-split');
const homeBanner = document.querySelector('.home-banner');

btnSplit.addEventListener('click', function(){
    console.log('kliknięcie w przycisk');
});

btnSplit.addEventListener('', function() {
    console.log('2 kliknięcie w przycisk');
});

homeBanner.addEventListener('click', function() {
    console.log('kliknięto w banner');
});

// ===========================================================

// Inne sposoby rejestrowania zdarzeń

// const logo = document.querySelector('.navbar-brand');

// logo.onmouseover = function() {
//     console.log("Najechano na przycisk");
// }

// logo.onmouseover = function() {
//     console.log("drugie event");
// }

