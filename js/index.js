let pageNumber = 0;
const numberItemPerPage = 50;
let allMonstersArray;
const pageNumberAndDisplay = (monstersArray) => {
  const startIndex = pageNumber * numberItemPerPage;
  const endIndex = startIndex + numberItemPerPage;
  document.querySelector('#monster-container').querySelectorAll('*').forEach((n) => n.remove());
  for (let i = startIndex; i < monstersArray.length && i < endIndex; i++) {
    const monstersContainer = document.querySelector('#monster-container');
    const monsterInfoTag = document.createElement('div');
    const element = monstersArray[i];
    const monstersList = `Name: ${element.name} Age: ${element.age} Description: ${element.description}\n`;
    monsterInfoTag.textContent = monstersList;
    monsterInfoTag.appendChild(document.createElement('br'));
    monsterInfoTag.appendChild(document.createElement('br'));
    monstersContainer.appendChild(monsterInfoTag);
  }
};

const backButton = document.querySelector('#back');
const forwardButton = document.querySelector('#forward');
backButton.addEventListener('click', (event) => {
  if (pageNumber > 0) {
    pageNumber -= 1;
    pageNumberAndDisplay(allMonstersArray);
  }
});
forwardButton.addEventListener('click', (event) => {
  if (pageNumber * numberItemPerPage < allMonstersArray.length) {
    pageNumber += 1;
    pageNumberAndDisplay(allMonstersArray);
  }
});

fetch('http://localhost:3000/monsters')
  .then((res) => res.json())
  .then((data) => {
    pageNumberAndDisplay(data);
    allMonstersArray = data;

    const formTag = document.querySelector('#create-monster');

    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', '#');

    const n = document.createElement('input');
    n.setAttribute('type', 'text');
    n.setAttribute('name', 'monster_name');
    n.setAttribute('placeholder', 'Name');

    const a = document.createElement('input');
    a.setAttribute('type', 'text');
    a.setAttribute('name', 'monster_age');
    a.setAttribute('placeholder', 'Age');

    const d = document.createElement('input');
    d.setAttribute('type', 'text');
    d.setAttribute('name', 'monster_description');
    d.setAttribute('placeholder', 'Description');

    const s = document.createElement('input');
    s.setAttribute('type', 'submit');
    s.setAttribute('value', 'Create Monster');

    form.appendChild(n);
    form.appendChild(a);
    form.appendChild(d);
    form.appendChild(s);

    formTag.appendChild(form);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const newMonster = {
        name: event.target.monster_name.value,
        age: parseFloat(event.target.monster_age.value),
        description: event.target.monster_description.value,
      };
      allMonstersArray.push(newMonster);
      pageNumberAndDisplay(allMonstersArray);

      fetch('http://localhost:3000/monsters', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMonster),
      });
    });
  });
