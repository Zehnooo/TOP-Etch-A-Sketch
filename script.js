const grid = document.querySelector(".grid-container");

const colors = ["rgba(250, 231, 235, .1)","rgba(255, 212, 229, .1)","rgba(212, 255, 234, .1)","rgba(238, 203, 255, .1)","rgba(254, 255, 163, .1)","rgba(219, 220, 255, .1)"];

for (i = 0; i < 16 * 16; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  grid.appendChild(tile);
  const randomNum = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomNum];
  tile.addEventListener("mouseover", () => {
    let background = tile.style.backgroundColor;
    
    if (!background){
      tile.style.backgroundColor = randomColor;
    } else {
      const rgbaValues = background.match(/[\d.]+/g);
      let currentAlphaVal = parseFloat(rgbaValues[3]);
       if (!currentAlphaVal){
        console.log("opacity maxed");
        return;
      }
      let newAlpha = Math.min(currentAlphaVal + .1, 1);
      console.log(newAlpha);
     
      const newRgba = `rgba(${rgbaValues[0]},${rgbaValues[1]},${rgbaValues[2]},${newAlpha})`;
      tile.style.backgroundColor = newRgba;
    }
    
   
  });
}
