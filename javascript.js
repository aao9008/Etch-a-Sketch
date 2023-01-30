// Select grid container and repeat column template for 16 columns.
const container = document.querySelector('.container');

// Establish default gridSize
let gridSize = 16 ** 2;

// Generate default grid
createGrid()

// Create function that creates grid of size n
function createGrid(){
    //Check if a grid exists
    if (container.firstChild){
        // If grid exists, clear gird
        clearGrid();
    }

    // Great grid template of sqrt gridSize
    container.style = `grid-template-columns: repeat(${Math.sqrt(gridSize)}, 1fr);`


    // Use loop to add div element until you have n X n grid
    for (let i = 1; i <= gridSize; i++){
        // Create div element
        const div = document.createElement('div');

        div.classList.add('gridSquare');

        // Add div element as child of .container element
        container.appendChild(div);
    }
}

// Create function to remove all elements of grid container 
function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

// Create function to add hover class to squares
function draw(e){
    if (e.target.className === 'gridSquare'){
        e.target.classList.add('hover');
    }
    console.log(e.target.classList);

    return;
}

// Add event listener to gridSquares parent container

// Use bubbling to trigger mouseover event in each square
container.addEventListener('mouseover', draw);

/* Add functions to change size of sketch grid */

// Select button element
const button = document.querySelector('.gridSize');

// Listen for click and prompt user for new grid size
button.addEventListener('click', resize);

function resize(){
    // Prompt user for new grid size
    let newGrid = prompt("Please enter new gird size. New grid size must be an integer between 1 and 100:");

    // Following if statements perform data validation
    if(isNaN(newGrid)){
        alert('Invalid input! Please try again.');
    }

    if (newGrid < 1 || newGrid > 100){
        alert('Invalid input! Please try again.');
    }

    // Convert string to int 
    gridSize = (parseInt(newGrid) ** 2);

    // Generate new Grid
    createGrid();

    return;
}