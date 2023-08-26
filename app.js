const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add('square');
square.textContent = '';
square.style.width = "31.25px"
square.style.height = "31.25px"
square.style.padding = "0"
square.style.margin = "0"

let size = 16;


for (i=0 ; i<size*size ; i++) {
    function activeHover (e) {
        clone.classList.add('hover')
    }

    const clone = square.cloneNode(true);
    container.appendChild(clone);
    document.addEventListener('mousedown' , ()=> {clone.addEventListener('mousemove' , activeHover) });
    document.addEventListener('mouseup' , ()=> {clone.removeEventListener('mousemove' , activeHover) });
    
}

function setSquares () {
    size = prompt('how many squares per side?');
    if( size < 10 && size > 30 ) { alert("ERROR!") }
    else {
        square.style.width = `${500/size}px`
        square.style.height = `${500/size}px`
        removeSquares()


        for (i=0 ; i<size*size ; i++) {
            function activeHover (e) {
                clone.classList.add('hover')
            }
        
            const clone = square.cloneNode(true);
            container.appendChild(clone);
            document.addEventListener('mousedown' , ()=> {clone.addEventListener('mousemove' , activeHover) });
            document.addEventListener('mouseup' , ()=> {clone.removeEventListener('mousemove' , activeHover) });
            
        }
}
}
const btn = document.querySelector("#btn");
btn.addEventListener('click' , setSquares);

function removeSquares () {
    const squaresToRemove = document.querySelectorAll(".square");
    squaresToRemove.forEach(element => {
        element.remove();
    });
}




