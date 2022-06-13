fetch('http://localhost:3000/monsters')
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length && i <= 50; i++) {
      const monstersContainer = document.querySelector('#monster-container');
      const monsterInfoTag = document.createElement('span');
      const element = data[i];
      const monstersList = `Name: ${element.name} Age: ${element.age} Description: ${element.description}`;
      monsterInfoTag.textContent = monstersList;
      monstersContainer.appendChild(monsterInfoTag);
    }

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

      fetch("http://localhost:3000/monsters", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: json.stringify () {
   
   "Customer": "Jason Sweet",
   "Quantity": 1,
   "Price": 18.00
  },
      });

      response.json().then(data => {
        console.log(data);
      });


    });
  });
