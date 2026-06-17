// Get HTML elements
const dishEl = document.getElementById("dish");
const priceEl = document.getElementById("price");
const descEl = document.getElementById("description");
const button = document.getElementById("load-special");
const select = document.getElementById("day-select");

// Function that calls API
function loadSpecial(day) {
  fetch(`/api/special/${day}`)
    .then(res => {
      if (!res.ok) {
        throw new Error("No special found");
      }
      return res.json();
    })
    .then(data => {
      dishEl.textContent = data.dish;
      priceEl.textContent = "Price: €" + data.price;
      descEl.textContent = data.description;
    })
    .catch(err => {
      dishEl.textContent = "No special available";
      priceEl.textContent = "";
      descEl.textContent = "";
    });
}

// Button click event
button.addEventListener("click", () => {
  const selectedDay = select.value;
  loadSpecial(selectedDay);
});