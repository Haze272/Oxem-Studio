import './normalize.css';
import './sass/global.scss';
import './sass/calculator.scss';
import './sass/elements.scss';
import './sass/references.scss';

let carCostVal = document.getElementById('car-cost-slider');
let rangeValue = () => {
    let newValue = carCostVal.value;
    document.getElementById('car-cost-input').value = newValue;
}

carCostVal.addEventListener("input", rangeValue);

const input = document.getElementById('car-cost-input');
input.onchange = (e) => {
    const { value } = e.target;
    console.log(value);
    document.querySelector("input[id=car-cost-slider]").value = value;
};

console.log(document.getElementById('car-cost-input').classList);
/*
var elem = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = elem.value;
  document.getElementById('inputy').value = newValue;
}

elem.addEventListener("input", rangeValue);

const input = document.querySelector("input[id=inputy]");
input.onchange = (e) => {
    const { value } = e.target;
    console.log(value);
    document.querySelector("input[id=govno]").value = value;
};
*/