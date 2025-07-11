const colors = ["rgba(250, 231, 235, .1)","rgba(255, 212, 229, .1)","rgba(212, 255, 234, .1)","rgba(238, 203, 255, .1)","rgba(254, 255, 163, .1)","rgba(219, 220, 255, .1)"];
const floaterColors = ["#cdb4dbff","#ffc8ddff","#ffafccff", "#bde0feff","#a2d2ffff"];

const body = document.querySelector(".container");
const grid = document.querySelector(".grid-container");
let defaultGridSize = 16;
let tiles = [];
let gridSizeInput;

const newGridBtn = document.createElement("button");
newGridBtn.textContent = "Change Grid";
body.append(newGridBtn);

newGridBtn.addEventListener("click", () => {
  let input = parseInt(prompt("Enter new grid size (Default is 16)"));

  if (isNaN(input) || input > 100 || input < 0 || !input) {
    alert("Input must be a whole number between 0 and 100");
    return;
  }
  for (const tile of tiles){
    tile.style.backgroundColor = "";
  }
  defaultGridSize = input; 
  grid.innerHTML = "";    
  tiles = [];               
  buildGrid(defaultGridSize);
});

for (let i = 0; i < 20; i++){
  const floaters = document.createElement("div");
  floaters.classList.add("floater");
  const randomNumTop = Math.floor(Math.random() * (window.innerHeight - 150));
  const randomNumLeft = Math.floor(Math.random() * (window.innerWidth - 150));
  const randomNumColor = Math.floor(Math.random() * colors.length);
  const randomColor = floaterColors[randomNumColor];
  floaters.style.backgroundColor = randomColor;
  floaters.style.top = `${randomNumTop}px`;
  floaters.style.left = `${randomNumLeft}px`;
  body.append(floaters);
}


function buildGrid (gridSize){
  let tileCount = gridSize * gridSize;

  for (let i = 0; i < tileCount; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  grid.appendChild(tile);
  const randomNum = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomNum];
  tile.addEventListener("mouseover", (e) => {
    const tile = e.currentTarget;
    let background = tile.style.backgroundColor;
    
    if (!background){
      tile.style.backgroundColor = randomColor;
    } else {
      const rgbaValues = background.match(/[\d.]+/g);
      let currentAlphaVal = parseFloat(rgbaValues[3]);
       if (!currentAlphaVal || isNaN(currentAlphaVal)){
        
        return;
      }
      let newAlpha = Math.min(currentAlphaVal + .1, 1);
      
     
      const newRgba = `rgba(${rgbaValues[0]},${rgbaValues[1]},${rgbaValues[2]},${newAlpha})`;
      tile.style.backgroundColor = newRgba;
    }
    
   
  });
  tiles.push(tile);
}
 
}


buildGrid(defaultGridSize);



