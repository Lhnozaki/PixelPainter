// Creates Grid
let canvas = document.querySelector("#pixelPainter");

function createCanvas(num1, num2) {
  for (x = 0; x < num1; x++) {
    let row = document.createElement("div");
    row.className = "row";
    for (y = 0; y < num2; y++) {
      let box = document.createElement("div");
      box.className = "fill hold";
      // box.draggable = "true";
      row.appendChild(box);
    }
    canvas.appendChild(row);
  }
}

// Determine Grid Size
createCanvas(30, 40);

// Declare UI Variables
let body = document.querySelector("body");
let box = document.querySelectorAll(".fill");
let header = document.querySelector("h1");
let pixelPainter = document.querySelector("#pixelPainter");
let resetBtn = document.querySelector("#clrBtn");

// Add Eventlistener to create Painting method
let mousedown = false;
box.forEach(function(e) {
  e.addEventListener("mousedown", function() {
    this.style.background = chooseColor.value;
    mousedown = true;
  });
  e.addEventListener("mouseover", function() {
    if (mousedown === true) {
      this.style.background = chooseColor.value;
    }
  });
  e.addEventListener("mouseup", function() {
    mousedown = false;
  });
});

// Create tools container
let tools = document.createElement("div");
tools.id = "toolsContainer";

// Create Flex Container
let flexContainer = document.createElement("div");
flexContainer.id = "flexContainer";
body.appendChild(flexContainer);

// Create column to house the Header and Tool divs. > Append everything into flex container
let columnOne = document.createElement("div");
columnOne.id = "columnOne";
flexContainer.appendChild(columnOne);
flexContainer.appendChild(pixelPainter);
columnOne.appendChild(header);
columnOne.appendChild(tools);

// Change Logo Header Text
header.innerText = "PXL PNTR";

// Creating the buttons
let chooseColor = document.createElement("input");
chooseColor.id = "colors";
chooseColor.type = "color";
tools.appendChild(chooseColor);

let clrBtn = document.createElement("button");
clrBtn.id = "clrBtn";
clrBtn.innerText = "CLEAR";
tools.appendChild(clrBtn);

let fillClr = document.createElement("button");
fillClr.id = "fillClr";
fillClr.innerText = "ERASE";
tools.appendChild(fillClr);

// Event Listeners for buttons
fillClr.addEventListener("click", function() {
  chooseColor.value = "#ffffff";
});

clrBtn.addEventListener("click", function() {
  window.location.reload();
});

// Easter Egg?
header.addEventListener("click", function() {
  easterEgg();
});
