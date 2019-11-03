var container = document.querySelector('#grid-container');

// create initial divs

for (var i = 1; i < 257; i++) {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('class', "box " + i);
  container.appendChild(newDiv);
} 

// Reset button
function resetSketch() {
  // removes current divs in container
  clearDivs();
  // prompts user for new # of squares per side
  var dimensions = prompt("How many squares would you like per side?" , "16");
  // generate using same total space
  // Recursive function to continue prompting for correct input
  if (dimensions> 100) {
    resetSketch();
    alert("too big!");
  } else {
  generateDivs(dimensions);
  }
}

function clearDivs() {
  boxes.forEach((box) => container.removeChild(box));
}

function generateDivs(num) {
  var n = parseInt(num);
  var squared = n*n;
  // Create divs and append to container
  for (var j = 1; j < (squared + 1); j++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', "box " + j);
    container.appendChild(newDiv);
  } 
  // Adjust div sizes for new dimensions
  container.classList.remove("grid-container");
  container.setAttribute("style", "display: grid; grid-template: repeat(" + n + ", 1fr) / repeat(" + n + ", 1fr);width: 500px;height: 500px;border: 3px solid green");
  // Add event listener
  boxes = document.querySelectorAll('.box')
  boxes.forEach((box) => {
    box.addEventListener('mouseenter', changeColorRandom)  
  });
}


// create event listener
var boxes = document.querySelectorAll('.box')
function changeColor(e) {
  let currentBox = e.target;
  currentBox.classList.add('hover')
}

boxes.forEach((box) => {
  box.addEventListener('mouseenter', changeColor)  
});

//Random Color Generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Random Color on hover
function changeColorRandom(e) {
  let currentBox = e.target;
  let color = getRandomColor();
  currentBox.setAttribute("style", "height: 100%; width: 100%; border: 1px solid black; background-color: " + color +  ";");
  currentBox.setAttribute("color-data", color);
}