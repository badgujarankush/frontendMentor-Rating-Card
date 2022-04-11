const ratingNum = document.querySelectorAll(".rate");
const submitBtn = document.getElementById("submitButton");
const ratingCard = document.getElementById("id-rating-card");
const thanksCard = document.getElementById("id-thankyouCard");
const numberRating = document.getElementById("selectedRating");
let selectedRating = null;

function handleClickNumberBtn({ target }) {
  removeAllActiveClass();
  target.classList.add("active");
  selectedRating = target.value;
  console.log(selectedRating);
}

function removeAllActiveClass() {
    ratingNum.forEach((button) => button.classList.remove("active"));
  }

function handleSubmitBtn(){
  if(!selectedRating){
    alert("Please select rating");
  }
  numberRating.textContent = selectedRating;
  thanksCard.classList.remove("hidden");
  ratingCard.classList.add("hidden");
}
ratingNum.forEach((button) => {
    button.addEventListener("click", handleClickNumberBtn);
  });

submitBtn.addEventListener("click",handleSubmitBtn);