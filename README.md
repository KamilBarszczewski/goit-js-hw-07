# Task 1

HTML zawiera listę kategorii ul#categories:
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

Napisz skrypt, który:

Policzy i wyświetli w konsoli liczbę kategorii w ul#categories, czyli elementów li.item.
Dla każdego elementu li.item na liście ul#categories, znajdzie i wyświetli w konsoli tekst tytułu elementu (tagu <h2>) oraz liczbę elementów w kategorii (wszystkie <li>, w nim zagnieżdżone).
W rezultacie w konsoli zostaną wyświetlone następujące komunikaty:
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

# Task 2

HTML zawiera pustą listę ul#ingredients:
<ul id="ingredients"></ul>

JavaScript zawiera tablicę ciągów znaków:
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Napisz skrypt, który dla każdego elementu tablicy ingredients:
1. Utworzy oddzielny element <li>. Pamiętaj, aby użyć metody document.createElement().
2. Doda nazwę składnika jako jego zawartość tekstową.
3. Doda klasę item do elementu.
4. Wstawi wszystkie <li> w jednej operacji do listy ul#ingredients.

# Task 3

Napisz skrypt tworzący galerię obrazów na podstawie zestawu danych. Kod HTML zawiera listę ul.gallery:
<ul class="gallery"></ul>

Użyj tablicy obiektów images, aby utworzyć elementy <img>, zagnieżdżone w <li>. Użyj łańcuchów szablonów i metody insertAdjacentHTML(), aby utworzyć znaczniki.

1. Wszystki elementy galerii powinny zostać dodane do DOM w jednej operacji dodawania.
2. Minimalnie zaprojektuj galerię za pomocą flexbox lub elementów siatki poprzez klasy CSS.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

# Task 4

Napisz skrypt, który utworzy i wyczyści kolekcję elementów. Użytkownik wprowadza liczbę elementów w input і klika przycisk Utwórz po czym następuje renderowanie kolekcji. Po kliknięciu przycisku Wyczyść kolekcja elementów zostanie wyczyszczona.
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Utwórz funkcję createBoxes(amount), która przyjmuje jeden parament - liczbę. Funkcja tworzy tyle <div>, ile podano w amount і dodaje je do div#boxes.

1. Wymiary pierwszego <div> - 30px na 30px.
2. Każdy element po pierwszym powinien być o 10px wyższy od poprzedniego.
3. Wszystkie elementy muszą mieć losowy kolor tła w formacie HEX. Aby uzyskać kolor użyj gotowej funkcji getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Utwórz funkcję destroyBoxes(), która wyczyści zawartość div#boxes, usuwając w ten sposób wszystkie utworzone elementy.

