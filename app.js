// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const form = document.querySelector('#new-goblin-form');
const formInputEl = document.querySelector('input');
const goblinLand = document.querySelector('.goblins');
const defeatedGoblins = document.querySelector('.defeated-goblins');
const heroHPEl = document.querySelector('.hero-hp');
// let state
let defeatedGoblinsCounter = 0;
let heroHp = 3;
const goblinList = [
    {
        name: 'Grub',
        hp: 3,
    },
    {
        name: 'Floyd',
        hp: 3,
    }
];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    let goblinName = formData.get('name');
    formInputEl.value = '';
    createGoblin(goblinName);
});


function createGoblin(name) {
    let goblinObj = {
        name: name,
        hp: 3
    };
    goblinList.push(goblinObj);
    displayGoblins(goblinList);
}

function displayGoblins(list) {
    goblinLand.textContent = '';
    for (let goblin of list) {
        const newGoblinEl = renderGoblin(goblin);
        newGoblinEl.addEventListener('click', () => {
            if (Math.random() < 0.6) {
                goblin.hp--;
                alert(`You hit ${goblin.name}`);
                if (goblin.hp === 0) {
                    defeatedGoblinsCounter++;
                    defeatedGoblins.textContent = defeatedGoblinsCounter;
                }
            } else {
                heroHp--;
                heroHPEl.textContent = heroHp;
                if (heroHp === 0) {
                    alert('Game Over! Refresh the page to start again!');
                    location.reload();
                } else {
                    alert(`You missed ${goblin.name} and got hit!`);
                }
            }
            displayGoblins(goblinList);
        });
        goblinLand.append(newGoblinEl);
    }
}

displayGoblins(goblinList);
