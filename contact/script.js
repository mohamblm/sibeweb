const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const container1 = document.querySelector(".container");
const container_thanks = document.querySelector(".container_thanks");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(e){
  e.preventDefault();
  // bullet[current - 1].classList.add("active");
  // progressCheck[current - 1].classList.add("active");
  // progressText[current - 1].classList.add("active");
  // current += 1;
  container1.classList.add('display_none');
  if (container_thanks.style.display === 'none' || container_thanks.style.display === '') {
    // Show the div
    container_thanks.style.display = 'block';
  } else {
    // Hide the div
    container_thanks.style.display = 'none';
  }
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbxLpoEOtd85WuiyQOYo99ITtHr-N_RVlH5I5VP8riXptEWJzSqDsIGhB-P3VGDK7_7wZQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
// e.preventDefault()
// fetch(scriptURL, { method: 'POST', body: new FormData(form)})
// .then(response => alert("Votre message a été avec succès, nous vous contacterons dans les plus brefs délais.form is submitted successfully." ))
// .then(() => { window.location.reload(); })
// .catch(error => console.error('Error!', error.message))
// alert("Votre message a été avec succès, nous vous contacterons dans les plus brefs délais.form is submitted successfully." )
})
