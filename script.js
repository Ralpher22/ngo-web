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
function showMtnMoneyForm() {
	document.getElementById('mtn-money-form').style.display = 'block';
	document.getElementById('orange-money-form').style.display = 'none';
  }
  
  function showOrangeMoneyForm() {
	document.getElementById('orange-money-form').style.display = 'block';
	document.getElementById('mtn-money-form').style.display = 'none';
  }
  const authForm = document.getElementById('auth-form');

// Fetch the sign-up/login form content from the server
fetch('/auth-form').then(response => response.text()).then(html => {
  authForm.innerHTML = html;
});
const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
if (isLoggedIn) {
	authForm.style.display = 'none';
  } else {
	authForm.style.display = 'block';
  }
  