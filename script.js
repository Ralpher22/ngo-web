
function showMtnMoneyForm() {
	document.getElementById('mtn-money-form').style.display = 'block';
	document.getElementById('orange-money-form').style.display = 'none';
  }
  
  function showOrangeMoneyForm() {
	document.getElementById('orange-money-form').style.display = 'block';
	document.getElementById('mtn-money-form').style.display = 'none';
  }
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.main-image');
  
  thumbnails.forEach(thumbnail => {
	  thumbnail.addEventListener('click', () => {
		  mainImage.src = thumbnail.src;
	  });
  });
  


 
