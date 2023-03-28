const gridContainer = document.querySelector('.grid-container');
const rowSizeInput = document.querySelector('#row-size');
const colSizeInput = document.querySelector('#col-size');
const updateButton = document.querySelector('#update-grid');

// initialize grid with default values
updateGrid();

updateButton.addEventListener('click', function() {
  updateGrid();
});

function updateGrid() {
  const numRows = Math.min(rowSizeInput.value, 100);
  const numCols = Math.min(colSizeInput.value, 100);
  
  // update grid template columns and rows
  gridContainer.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
  
  // clear existing grid items
  gridContainer.innerHTML = '';
  
  // add new grid items
  for (let i = 1; i <= numRows * numCols; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    //gridItem.textContent = `Item ${i}`;
    gridContainer.appendChild(gridItem);

    gridItem.addEventListener('mouseover', function() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r}, ${g}, ${b})`;
        this.style.backgroundColor = color;
      });
  }
}
