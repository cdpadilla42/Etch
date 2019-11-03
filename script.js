var container = document.querySelector('#grid-container');

// create initial divs

for (var i = 1; i < 257; i++) {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('class', "box " + i);
  container.appendChild(newDiv);
} 

// Reset button
function resetSketch(){
  // removes current divs in container
  clearDivs();
  // prompts user for new # of squares per side
  var dimensions = prompt("How many squares would you like per side?" , "16");
  // generate using same total space
  generateDivs(dimensions);
}

function clearDivs() {
  boxes.forEach((box) => container.removeChild(box));
}

function generateDivs(num) {
  var n = parseInt(num);
  var squared = n*n;
  console.log(squared);
  // SOMETHING WEIRD! When you try to finish this code, it cancels out ALL OTHER JS! Why is this?
  // does it have to do with the way variables are used?
  // does it have to do with the order of your code? Experiment with both.
  for (var j = 1; j < (squared + 1); j++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', "box " + j);
    container.appendChild(newDiv);
  } 
  container.classList.remove("grid-container");
  container.setAttribute("style", "display: grid; grid-template: repeat(" + n + ", 1fr) / repeat(" + n + ", 1fr);width: 500px;height: 500px;border: 3px solid green");
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