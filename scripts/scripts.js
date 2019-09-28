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
    if(document.querySelector('#whatDo').value.length != 0){
        document.querySelector('p').textContent = document.querySelector('#whatDo').value;
    } else {
        document.querySelector('p').textContent = 'Donec at libero id lectus porta dapibus eu in nibh. Cras id mauris sapien. Fusce viverra luctus urna ac rutrum. Duis semper elit eu mi facilisis eleifend. Donec semper, ipsum in malesuada congue, purus sem ullamcorper massa, sit amet lacinia nibh enim sed massa.'
    }
};
document.querySelector('#whatDo').addEventListener('input', changeAboutMe);