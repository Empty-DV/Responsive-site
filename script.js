let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

window.onclick = function(event) {
  var modal = document.getElementById('ticketModal');
  if (event.target == modal) {
      modal.style.display = "none";
  }
}