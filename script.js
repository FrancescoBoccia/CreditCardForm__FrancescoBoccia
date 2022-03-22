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

cardNumber.addEventListener("input", function () {
  const value = cardNumber.value;
  const a = value.split(" ");
  cardNumberInput.innerHTML = `
  <div class="frontCard__cardNumber__numbers">${a[0]}</div>
  <div class="frontCard__cardNumber__numbers">${a[1]}</div>
  <div class="frontCard__cardNumber__numbers">${a[2]}</div>
  <div class="frontCard__cardNumber__numbers">${a[3]}</div>`;
  console.log(cardNumbersDiv);
  cardNumbersDiv.any((div) => div === undefined);
});

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

// const a = value.split(" ");
// cardNumberUser.forEach((a, index, array) => {
//   console.log(a, index, array);
//   cardNumberUser.innerHTML = `
//     <div class="frontCard__cardNumber__numbers">${index}</div>
//     <div class="frontCard__cardNumber__numbers">${index}</div>
//     <div class="frontCard__cardNumber__numbers">${index}</div>
//     <div class="frontCard__cardNumber__numbers">${index}</div>`;
// });

// optionMonth.addEventListener("keydown", function (e) {
//   if (e.key == "Tab") {
//     const month = optionMonth.value;
//     expiresDate.innerHTML = `<div class="frontCard__expires__date">${month}/</div>`;
//   }
// });

// const frontCard = document.querySelector(".frontCard");
// const backCard = document.querySelector(".backCard");
// const inputCvv = document.querySelector(".options__cvvInput");

// inputCvv.addEventListener("focus", function () {
//   frontCard.style.transform = "rotate(360deg)";
//   frontCard.style.display = "none";
//   backCard.style.display = "block";
// });
