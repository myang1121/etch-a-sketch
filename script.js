const container = document.querySelector("#container");
for (let i = 0; i < 16; i ++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let m = 0; m < 16; m ++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        //grid.textContent = "hello";
        row.appendChild(grid);
    }
    
}

// Hovering
grid.addEventListener("mouseenter", () => {
    grid.classList.add("color");

});
    
