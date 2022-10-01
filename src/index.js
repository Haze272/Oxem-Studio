import './normalize.css';
import './sass/global.scss';
import './sass/calculator.scss';
import './sass/elements.scss';
import './sass/references.scss';

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