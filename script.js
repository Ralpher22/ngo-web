const form = document.getElementById("volunteer-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	if (nameInput.value === "" || emailInput.value === "" || phoneInput.value === "") {
		alert("Please fill out all fields before signing up.");
	} else {
		alert("Thank you for signing up to volunteer!");
		nameInput.value = "";
		emailInput.value = "";
		phoneInput.value = "";
	}
});