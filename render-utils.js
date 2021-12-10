export function renderGoblin(goblin) {
    const div = document.createElement('div');
    div.classList.add('goblin');
    const nameEl = document.createElement('p');
    nameEl.textContent = `Name: ${goblin.name}`;
    const hpEl = document.createElement('p');
    hpEl.textContent = `HP: ${goblin.hp}`;
    const imgEl = document.createElement('img');
    imgEl.src = './assets/goblin.png';
    if (goblin.hp === 0) {
        div.classList.add('dead');
    }
    div.append(nameEl, hpEl, imgEl);
    return div;
}