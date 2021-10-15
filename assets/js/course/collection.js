const paragraph = document.querySelector('p');
const allParagraphs = document.querySelectorAll('p');

console.log(paragraph);

//właściwości pobierające elementy html
const a = paragraph.parentElement; // element rodzic
const b = paragraph.firstElementChild; // pierwsze dziecko
const c = paragraph.lastElementChild; // ostatnie dziecko
const d = paragraph.children // kolekcja dzieci elementu #text
const e = paragraph.children[0] // wskazuje na 1 element
const f = paragraph.nextElementSibling // następny brat-element
const g = paragraph.previousElementSibling // poprzedni brat-element

//właściwości pobierające węzły
const h = paragraph.parentNode // wskazuje na nadrzędny węzeł
const i = paragraph.firstChild // pierwszy node
const j = paragraph.lastChild // ostatni node
const k = paragraph.childNodes // kolekcja wszystkich dzieci - nodów
const l = paragraph.childNodes[0] // pierwszy node
const m = paragraph.nextSibling // następny węzeł - w naszym przypadku wskazuje na znak nowej linii
const n = paragraph.previousSibling // poprzedni węzeł - w naszym przypadku wskazuje na znak nowej linii
const o = paragraph.childNodes[2].nextSibling;
const p = paragraph.childNodes[2].previousSibling;

console.log('parent element            ', a);
console.log('first element child       ', b);
console.log('last element child        ', c);
console.log('children                  ', d);
console.log('dzildren [0]              ', e);
console.log('next elements sibling     ', f);
console.log('previous element sibling  ', g);
console.log('parent node               ', h);
console.log('first child               ', i);
console.log('last child                ', j);
console.log('child nodes               ', k);
console.log('child nodes [0]           ', l);
console.log('next sibling              ', m);
console.log('previous sibling          ', n);
console.log('2 nodes next sibling      ', o);
console.log('2 nodes previous sibling  ', p);
