const form = document.getElementById("reservationForm");
const output = document.getElementById("output");

// Load saved reservations or start empty
let reservations = JSON.parse(localStorage.getItem("reservations")) || [];

// Render function
function renderReservations() {
  output.innerHTML = "";

  reservations.forEach((r, index) => {
    output.innerHTML += `
      <div class="card">
        <p><strong>Name:</strong> ${r.name}</p>
        <p><strong>Email:</strong> ${r.email}</p>
        <p><strong>Guests:</strong> ${r.guests}</p>

        <button onclick="deleteReservation(${index})">
          Delete
        </button>
      </div>
    `;
  });
}

// Delete function
function deleteReservation(index) {
  const confirmed = confirm("Are you sure you want to delete this reservation?");

  if (confirmed) {
    reservations.splice(index, 1);

    localStorage.setItem("reservations", JSON.stringify(reservations));

    renderReservations();
  }
}

// Handle form submit (validate both a first and last name plus the number of guists must be 2)
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const guests = parseInt(document.getElementById("guests").value);

    // Name validation
    const nameParts = name.split(" ").filter(part => part !== "");

    if (nameParts.length < 2) {
      alert("Please enter both a first name and a last name.");
      return;
    }

    // Guest validation
    if (guests < 2) {
      alert("A reservation must be for at least 2 guests.");
      return;
    }

    const newReservation = {
      name,
      email,
      guests
    };

    reservations.push(newReservation);

    localStorage.setItem(
      "reservations",
      JSON.stringify(reservations)
    );

    renderReservations();

    form.reset();
  });
}

// Initial render when page loads
renderReservations();