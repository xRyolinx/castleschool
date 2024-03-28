function show_contact() {
    document.querySelector('#contact-section').style.display = 'block';
    document.querySelector('.home').style.display = 'none';
    document.querySelector('#programs-section').style.display = 'none';
    document.querySelector('#map-section').style.display = 'none';
    document.querySelector('#languages-section').style.display = 'none';
    document.querySelector('#infos-mobile').style.display = 'none';
    document.querySelector('nav').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
}

function hide_contact() {
    document.querySelector('#map-section').removeAttribute('style');
    document.querySelector('#contact-section').removeAttribute('style');
    document.querySelector('.home').removeAttribute('style');
    document.querySelector('#programs-section').removeAttribute('style');
    document.querySelector('#languages-section').removeAttribute('style');
    document.querySelector('#infos-mobile').removeAttribute('style');
    document.querySelector('nav').removeAttribute('style');
    document.querySelector('footer').removeAttribute('style');
}


// start
document.addEventListener('DOMContentLoaded', () => {
    // resize
    // window.addEventListener('resize', hide_contact);
    // show contact
    let buttons = document.querySelectorAll('.send-msg');
    buttons.forEach(button => {
        button.addEventListener('click', show_contact);
    });

    // hide contact
    document.querySelector('#go-back').addEventListener('click', hide_contact);
});