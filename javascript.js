// Select grid container and repeat column template for 16 columns.
const container = document.querySelector('.container');

// Calculate total grid size
let columns = 16;
let rows = 16;
let gridSize = rows * columns;

// Use loop to add div element until you have 16 x 16 grid
for (let i = 1; i <= gridSize; i++){
    // Create div element
    const div = document.createElement('div');

    // Set element background color
    div.setAttribute('style', 'background-color: pink;');
    div.textContent= i;

    // Add div element as child of .container element
    container.appendChild(div);
}