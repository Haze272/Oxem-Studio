import './normalize.css';
import './sass/global.scss';
import './sass/calculator.scss';
import './sass/elements.scss';
import './sass/references.scss';


const carCost = document.getElementById('car-cost-input');
const initialPayment = document.getElementById('initial-payment-input');

const cbox = document.querySelectorAll(".biba");
for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("input", () => {
        let newValue = cbox[i].value;
        document.querySelector('input[name=' + cbox[i].name + '].boba').value = newValue;
        if (cbox[i].name == "super-input1") {
            initialPayment.value = newValue * document.getElementById("initial-payment-slider").value / 100;
        }
    });
}

const xbox = document.querySelectorAll(".boba")
for (let j = 0; j < xbox.length; j++) {
    xbox[j].oninput = (e) => {
        const { value } = e.target;
        document.querySelector('input[name=' + xbox[j].name + '].biba').value = value;
        if (xbox[j].name == "super-input1") {
            initialPayment.value = value * document.getElementById("initial-payment-slider").value / 100;
        }
    }
}

const zbox = document.getElementById("initial-payment-input");
zbox.oninput = (e) => {
    const { value } = e.target;
    document.getElementById('initial-payment-slider').value = value / carCost.value * 100;
    document.getElementById('initial-payment-percent').innerHTML = (value / carCost.value * 100) + "%";
}

const ybox = document.getElementById("initial-payment-slider");
ybox.oninput = (e) => {
    const { value } = e.target;
    document.getElementById('initial-payment-percent').innerHTML = value + "%";
    initialPayment.value = value * carCost.value / 100;
}