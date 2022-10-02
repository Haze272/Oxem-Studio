import './normalize.css';
import './sass/global.scss';
import './sass/calculator.scss';
import './sass/elements.scss';
import './sass/references.scss';


const carCost = document.getElementById('car-cost-input');
const initialPayment = document.getElementById('initial-payment-input');
const leasePeriod = document.getElementById('lease-period-value');
const contractAmount = document.getElementById('lease-contract-value');
const monthlyFee = document.getElementById('monthly-fee-value');

function calculateMonthlyFee() {
    document.getElementById('monthly-fee-value').innerHTML = Math.trunc((carCost.value - initialPayment.value) * ((0.035 * Math.pow((1 + 0.035), leasePeriod.value)) / (Math.pow((1 + 0.035), document.getElementById('lease-period-value').value) - 1)));
    console.log('monthly fee has been calculated!');
}

function calculateInitialPayment() {
    initialPayment.value = carCost.value * document.getElementById("initial-payment-slider").value / 100;
}

function calculateContractAmount() {
    contractAmount.innerHTML = parseInt(initialPayment.value) + (leasePeriod.value * parseInt(monthlyFee.innerHTML));
}

const cbox = document.querySelectorAll(".biba");
for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("input", () => {
        let newValue = cbox[i].value;
        document.querySelector('input[name=' + cbox[i].name + '].boba').value = newValue;
        if (cbox[i].name == "super-input1") {
            calculateInitialPayment();
        }
        calculateMonthlyFee();
        calculateContractAmount();
    });
}

const xbox = document.querySelectorAll(".boba")
for (let j = 0; j < xbox.length; j++) {
    xbox[j].oninput = (e) => {
        const { value } = e.target;
        document.querySelector('input[name=' + xbox[j].name + '].biba').value = value;
        if (xbox[j].name == "super-input1") {
            calculateInitialPayment();
        }
        calculateMonthlyFee();
        calculateContractAmount();
    }
}

const zbox = document.getElementById("initial-payment-input");
zbox.oninput = (e) => {
    const { value } = e.target;
    document.getElementById('initial-payment-slider').value = value / carCost.value * 100;
    document.getElementById('initial-payment-percent').innerHTML = (value / carCost.value * 100) + "%";
    calculateMonthlyFee();
    calculateContractAmount();
}

const ybox = document.getElementById("initial-payment-slider");
ybox.oninput = (e) => {
    const { value } = e.target;
    document.getElementById('initial-payment-percent').innerHTML = value + "%";
    calculateInitialPayment();
    calculateMonthlyFee();
    calculateContractAmount();
}