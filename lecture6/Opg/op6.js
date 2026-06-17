/* Tables in HTML and JavaScript
In this exercise, you are given the HTML below which shows a 2x2 table with the letters A, B, C and D:

Your task is to add JavaScript code into the script tag which creates a table identical to the shown one.
These methods will be useful:
    - document.querySelector('#output'): To select *where* your table will be inserted.
    - document.createElement: Creating the table, its rows and individual elements. Arguments here are "table", "tr" and "td".
    - .textContent: Adding the actual values of the cells (A, B, C and D).
    - appendChild: Adds the table, tr and td to the DOM tree.*/

// Choose the DIV where the table should be placed
    let div = document.querySelector("#output2");
    // Create table
    let table = document.createElement("table");
    // First row of table
    let row1 = document.createElement("tr");
    let coulmn1 = document.createElement("td")
    let column12 = document.createElement("td")
    coulmn1.textContent = "A";
    column12.textContent = "B";
    row1.appendChild(coulmn1);
    row1.appendChild(column12);
    // Second row of table
    let row2 = document.createElement("tr");
    let coulmn2 = document.createElement("td")
    let coulmn22 = document.createElement("td")
    coulmn2.textContent = "C";
    coulmn22.textContent = "D";
    row2.appendChild(coulmn2);
    row2.appendChild(coulmn22);
    // Add the two rows to the table
    table.appendChild(row1);
    table.appendChild(row2)
    // Add the table to the document
    div.appendChild(table);