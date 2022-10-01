import './normalize.css';
import './sass/global.scss';
import './sass/calculator.scss';
import './sass/elements.scss';
import './sass/references.scss';

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