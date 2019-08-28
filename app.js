const cards = document.querySelector(".cards");
const singleCard = document.querySelectorAll(".card");
const btn = document.querySelector(".btn");

function rotateCards() {
  for (let i = 0; i < singleCard.length; i++) {
    singleCard[i].classList.add("card-shuffle");
    setTimeout(() => {
      singleCard[i].classList.remove("card-shuffle");
    }, 2000);
  }
}

function shuffle(items) {
  let cached = items.slice(0),
    temp,
    i = cached.length,
    rand;
  while (--i) {
    rand = Math.floor(i * Math.random());
    temp = cached[rand];
    cached[rand] = cached[i];
    cached[i] = temp;
  }
  return cached;
}

function shuffleCards() {
  let nodes = cards.children,
    i = 0;
  nodes = Array.prototype.slice.call(nodes);
  nodes = shuffle(nodes);
  while (i < nodes.length) {
    cards.appendChild(nodes[i]);
    ++i;
  }

  rotateCards();
}
btn.addEventListener("click", shuffleCards);
