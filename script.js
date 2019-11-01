var container = document.querySelector('#grid-container');

        for (var i = 1; i < 257; i++) {
          let newDiv = document.createElement('div');
          newDiv.setAttribute('class', "box " + i);
          container.appendChild(newDiv);
        } 

        // target array of boxs
        var boxes = document.querySelectorAll('.box')
        // function: change class to hover
        function changeColor(e) {
          let currentBox = e.target;
          currentBox.classList.add('hover')
          
        }
        // add eventListener
        boxes.forEach((box) => {
          box.addEventListener('mouseenter', changeColor)
        });