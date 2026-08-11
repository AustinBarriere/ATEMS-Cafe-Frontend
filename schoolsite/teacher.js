
document.querySelector("#homepagebutton").addEventListener('click', () => {
    location.href = 'index.html';
});

document.querySelector('#teacherbutton').addEventListener('click', () => {
    location.href = 'teacher.html';
});

let order = ['', '', '', ''];

const entreebuttons = document.querySelectorAll('#entrees-selector');
const sidesbuttons = document.querySelectorAll('#sides-selector');
const drinkbuttons = document.querySelectorAll('#drinks-selector');
const dessertbuttons = document.querySelectorAll('#desserts-selector');

const entreedisplay = document.querySelector('#entreedisplay');
const sidedisplay = document.querySelector('#sidedisplay');
const drinkdisplay = document.querySelector('#drinkdisplay');
const dessertdisplay = document.querySelector('#dessertdisplay');

function handleSelection(buttons, displayElement, index, activeClass) {
    buttons.forEach(btn => btn.classList.remove(activeClass));
    const button = this;
    button.classList.add(activeClass);
    const targetId = button.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    order[index] = targetElement.textContent;
    displayElement.textContent = order[index];
}

entreebuttons.forEach(button => {
    button.addEventListener('click', function() {
        handleSelection.call(this, entreebuttons, entreedisplay, 0, 'selected');
    });
});

sidesbuttons.forEach(button => {
    button.addEventListener('click', function() {
        handleSelection.call(this, sidesbuttons, sidedisplay, 1, 'selected-side');
    });
});

drinkbuttons.forEach(button => {
    button.addEventListener('click', function() {
        handleSelection.call(this, drinkbuttons, drinkdisplay, 2, 'selected-side');
    });
});

dessertbuttons.forEach(button => {
    button.addEventListener('click', function() {
        handleSelection.call(this, dessertbuttons, dessertdisplay, 3, 'selected-side');
    });
});

document.querySelector('.orderconfirm').addEventListener('click', () => {
    const name = document.querySelector('.input1').value;
    const classnumber = document.querySelector('.input2').value;
    const phone = document.querySelector('.input3').value;
    const lunchperiod = document.querySelector('.input4').value;

    const orderinformation = [
        name,
        classnumber,
        phone,
        lunchperiod,
        ...order
    ];

    console.log(orderinformation);

    document.querySelector('.input1').value = "";
    document.querySelector('.input2').value = "";
    document.querySelector('.input3').value = "";
    document.querySelector('.input4').value = "";
    order = ['', '', '', ''];
    entreedisplay.textContent = '';
    sidedisplay.textContent = '';
    drinkdisplay.textContent = '';
    dessertdisplay.textContent = '';

    localStorage.setItem('OrderInfo', JSON.stringify(orderinformation));
});