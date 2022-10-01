import './normalize.css';
import './sass/global.scss';
import './sass/calculator.scss';
import './sass/elements.scss';
import './sass/references.scss';


function jopa(element)
{
    if (element.value < 1000000) {
        element.value = 1000000;
    }
    else if (element.value > 6000000) {
        element.value = 6000000;
    }
}

const cbox = document.querySelectorAll(".biba");
for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("input", () => {
        let newValue = cbox[i].value;
        document.querySelector('input[name=' + cbox[i].name + '].boba').value = newValue;
    });
}

const xbox = document.querySelectorAll(".boba")
for (let j = 0; j < xbox.length; j++) {
    xbox[j].oninput = (e) => {
        const { value } = e.target;
        document.querySelector('input[name=' + xbox[j].name + '].biba').value = value;
    }
}

const zbox = document.getElementById("initial-payment-input");
zbox.oninput = (e) => {
    const { value } = e.target;
    document.getElementById('initial-payment-slider').value = value / document.getElementById('car-cost-input').value * 100;
    document.getElementById('initial-payment-percent').innerHTML = (value / document.getElementById('car-cost-input').value * 100) + "%";
}

const ybox = document.getElementById("initial-payment-slider");
ybox.oninput = (e) => {
    const { value } = e.target;
    document.getElementById('initial-payment-percent').innerHTML = value + "%";
    document.getElementById('initial-payment-input').value = value * document.getElementById('car-cost-input').value / 100;
}