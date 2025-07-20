const container = document.querySelector("#container");

// Reset canvas size
// Create button
const button = document.querySelector("button");
let size = 16;
button.addEventListener("click", () => {
    size = prompt("Please enter number of squares per size for new canvas (max 100):", 16);
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        container.removeChild(row);
    });
    etchASketch();
});

function etchASketch() {
    for (let i = 0; i < size; i ++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let m = 0; m < size; m ++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            //grid.textContent = "hello";
            row.appendChild(grid);
        }
        
    }
    // Hovering
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener("mouseenter", () => {
            grid.classList.add("color");
        });
    });
};
etchASketch();


