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
            if (random < 0.75) {
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