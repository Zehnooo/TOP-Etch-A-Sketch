const grid = document.querySelector(".grid-container");

for (i = 0; i < 16 * 16; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  grid.appendChild(tile);
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  tile.addEventListener("click", () => {
    tile.style.backgroundColor = randomColor;
  });
}
