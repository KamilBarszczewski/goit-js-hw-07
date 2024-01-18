const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

for (let i of ingredients) {
  
  let item = document.createElement('li')
  item.textContent = i
  item.classList.add(".item")
  list.appendChild(item)
}
