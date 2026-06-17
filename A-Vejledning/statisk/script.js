document.addEventListener("DOMContentLoaded", function () {

//countdown box
const countdownText = document.getElementById("countdown-text");

let timeLeft = 10;

const timer = setInterval(() => {
  timeLeft--;
  countdownText.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);

    // Final message
    countdownText.textContent = "READY!";
    document.getElementById("countdown-box").style.backgroundColor = "green";
  }
}, 1000);



let MagheritaPage = document.getElementById("Magherita");
// Navigation link to Margerita Page
if (MagheritaPage) {
    MagheritaPage.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "pizza-margherita.html";
    });
}

//Naviagtion to pasta page
let pastaPage = document.getElementById("pasta-carbonara");
if (pastaPage) {
  pastaPage.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "pasta-carbonara.html";
  });
}

// Spin module 
const spinText = document.getElementById("spin-text");
let spinDiscount = document.getElementById("spin-discount");
if(spinDiscount){
    spinDiscount.addEventListener("click", function (e) {
    e.preventDefault();
        
        // Disable button immediately
        spinDiscount.disabled = true;

        if(spinText) {
            spinText.textContent = "Spinning...";
        };

        setTimeout(() => {
            spinText.classList.remove("success", "no-luck");

            const random = Math.random(); // number between 0 and 1
            if (random < 0.7) {
                spinText.textContent = "Better luck next time! Try again later.";
                spinText.classList.add("no-luck");
            } else {
                spinText.textContent = "Congratulations! You won a 20% discount coupon! Use code: LUCKY20";
                spinText.classList.add("success");
            }
            // Re-enable button
            spinDiscount.disabled = false;
        }, 10000)
    });
}

//Special box 
let days = [
    "monday", 
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

const specialBox = document.getElementById("special-box");
let loadSpecials = document.getElementById("load-special");
if(loadSpecials){
    loadSpecials.addEventListener("click", function (e) {
    e.preventDefault();
        
        // Disable button immediately
        loadSpecials.disabled = true;

        let currentDay = new Date().getDay() - 1;
    
        
        fetch("specials/"+days[currentDay] + ".json")
            .then(responce => responce.json())
            .then(data => {
                specialBox.style.display = "block"; //show box

                specialBox.innerHTML = `
                    <h3><strong>Today's Special ${days[currentDay]}:</strong></h3>
                    <p><strong>${data.name} - Price: €${data.price}</strong></p>
                    <p>${data.description}</p>
                    <p>${data.chef_note}</p>
                `;
                
            })
            .catch(error => {
                console.error("Error loading JSON:", error);
                specialBox.textContent = "Failed to load special.";
            });
    }); 
};


let BacktoMenu = document.getElementById("BacktoMenu");
//Navigation to menu page
if (BacktoMenu) {
    BacktoMenu.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "index.html"
    });
}

//Go to form page
const goToFormPage = document.getElementById("goToFormPage");

if (goToFormPage) {
  goToFormPage.addEventListener("click", function () {
    window.location.href = "formPage.html";
  });
}

//Adding dish to table
const addButton = document.getElementById("addDishBtn");
const table = document.getElementById("dishTable");
if(addButton || table){
    addButton.addEventListener("click", function () {
        const dishInput = document.getElementById("dishInput");
        const priceInput = document.getElementById("priceInput");

        const dish = dishInput.value.trim();
        const price = priceInput.value.trim();

        // Empty fields
        if (dish === "" || price === "") {
            alert("Please enter both dish and price");
            return;
        }

        // Dish length
        if (dish.length < 4) {
            alert("Dish name must be at least 4 characters long");
            return;
        }

        // Price validation
        if (isNaN(price) || Number(price) < 10) {
            alert("Price must be at least €10");
            return;
        }

        const row = table.insertRow();

        const dishCell = row.insertCell(0);
        const priceCell = row.insertCell(1);

        dishCell.textContent = dish;
        priceCell.textContent = "€" + Number(price).toFixed(2);

        dishInput.value = "";
        priceInput.value = "";
    });
}

//random dish 
const randomDishBtn = document.getElementById("randomDishBtn");
const result = document.getElementById("randomDishResult");

if(randomDishBtn || result){
    randomDishBtn.addEventListener("click", function () {
        
        // Get all rows from table (skip header row)
        const rows = document.querySelectorAll("#dishTable tr");

        let dishes = [];

        // start at 1 to skip table header
        for (let i = 1; i < rows.length; i++) {
            const cells = rows[i].querySelectorAll("td");
            const dishName = cells[0].textContent;
            dishes.push(dishName);
        }

        // pick random dish
        const randomIndex = Math.floor(Math.random() * dishes.length);
        const randomDish = dishes[randomIndex];

        // show result
        result.textContent = "Random Dish: " + randomDish;
    });
}

});


//Change image
const foodImage = document.getElementById("food");

if (foodImage) {
    foodImage.addEventListener("click", function () {

        if (
            foodImage.src ===
            "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg"
        ) {
            foodImage.src =
                "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg";
        } else {
            foodImage.src =
                "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg";
        }
    });
}