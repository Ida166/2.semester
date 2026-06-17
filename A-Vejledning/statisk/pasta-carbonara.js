// ------------------------------
// BACK BUTTON
// ------------------------------
let backBtn = document.getElementById("back-btn");

if (backBtn) {
  backBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}


// ------------------------------
// DATA ARRAY (initial items)
// ------------------------------
let data = [
  {
    name: "Pizza Margherita",
    price: 12
  },
  {
    name: "Pasta Carbonara",
    price: 14
  }
];


// ------------------------------
// DOM ELEMENTS
// ------------------------------
let loadBtn = document.getElementById("load-related");
let container = document.getElementById("output-box");

let nameInput = document.getElementById("name-input");
let priceInput = document.getElementById("price-input");
let addBtn = document.getElementById("add-btn");


// ------------------------------
// RENDER FUNCTION (IMPORTANT FOR EXAMS)
// ------------------------------
function renderData() {
  container.innerHTML = "<h4>Related Dishes:</h4>";

  data.forEach(item => {
    container.innerHTML += `
      <p>${item.name} - €${item.price}</p>
    `;
  });
}


// ------------------------------
// LOAD BUTTON (SHOW LIST)
// ------------------------------
if (loadBtn) {
  loadBtn.addEventListener("click", function () {
    container.style.display = "block";
    renderData();
  });
}


// ------------------------------
// ADD NEW ITEM (USER INTERACTION)
// ------------------------------
if (addBtn) {
  addBtn.addEventListener("click", function () {

    let name = nameInput.value.trim();
    let price = priceInput.value.trim();

    // validation
    if (name === "" || price === "") {
      alert("Please fill in both fields");
      return;
    }

    if (price <= 0) {
      alert("Price must be greater than 0");
      return;
    }

    // add new object
    data.push({
      name: name,
      price: Number(price)
    });

    // clear inputs
    nameInput.value = "";
    priceInput.value = "";

    // update display
    renderData();
  });
}