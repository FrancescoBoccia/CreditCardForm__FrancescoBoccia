"use script";

const cardNumber = document.getElementById("cardNumber");
const cardNumberInput = document.querySelector(".frontCard__cardNumber");
const cardNumbersDiv = document.querySelectorAll(
  ".frontCard__cardNumber__numbers"
);
const cardName = document.getElementById("cardName");
const cardNameUser = document.querySelector(".frontCard__holder__name");
const cardHolder = document.querySelector(".frontCard__holder");

const optionMonth = document.getElementById("optionMonth");
const optionYear = document.getElementById("optionYear");
const expiresDate = document.querySelector(".frontCard__expires__date");

const cardValue = document.querySelector(".frontCard__cardNumber__numbers");

// 12 Digit Number

function moveToNext(curr, next) {
  cardNumberInput.innerHTML = `

  `;
}

// cardNumber.addEventListener("input", function () {
//   const value = cardNumber.value;
//   const a = value.split(" ");
//   cardNumberInput.innerHTML = `
//   <div class="frontCard__cardNumber__numbers">${a[0]}</div>
//   <div class="frontCard__cardNumber__numbers">${a[1]}</div>
//   <div class="frontCard__cardNumber__numbers">${a[2]}</div>
//   <div class="frontCard__cardNumber__numbers">${a[3]}</div>`;
//   if (a.value === 4) {
//     console.log("w");
//   }
// });

cardNumber.addEventListener("focus", function () {
  cardNumberInput.classList.add("inputFocus");
});

cardNumber.addEventListener("blur", function () {
  cardNumberInput.classList.remove("inputFocus");
});

cardName.addEventListener("focus", function () {
  cardHolder.classList.add("inputFocus");
});

cardName.addEventListener("blur", function () {
  cardHolder.classList.remove("inputFocus");
});

// Cvv Card
const cardContent = document.querySelector(".card__content");
const inputCvv = document.querySelector(".options__cvvInput");
const numberCvv = document.querySelector(".backCard__inputCVV");

inputCvv.addEventListener("focus", function () {
  cardContent.style.transform = "rotateY(0.5turn)";
  console.log(inputCvv);
});

inputCvv.addEventListener("blur", function () {
  cardContent.style.transform = "rotateY(1turn)";
});

console.log(inputCvv.value);
