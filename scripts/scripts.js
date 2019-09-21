let changeName = function () {
    let inp = document.querySelector('#Name');
    let b = document.querySelector('.name-block h1');
    b.textContent = inp.value;
};
document.querySelector('#submit-name').addEventListener('click', changeName);

let changeWhatIDo = function () {
    document.querySelector('.tagline').textContent = document.querySelector('#whoIAm').value;
};
document.querySelector('#whoIAm').addEventListener('change', changeWhatIDo);

let changeAboutMe = function () {
    document.querySelector('p').textContent = document.querySelector('#whatDo').value;
};
document.querySelector('#whatDo').addEventListener('input', changeAboutMe);