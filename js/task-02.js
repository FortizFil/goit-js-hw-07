const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector('#ingredients');

const newLi = ingredients.forEach(ingredient => {
  const li =  document.createElement('li');
    li.textContent = ingredient;
    ul.appendChild(li)
});

