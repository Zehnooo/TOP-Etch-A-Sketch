const grid = document.querySelector(".grid-container");

for (i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div");
  div.classList.add("tile");
  grid.appendChild(div);
}
