"use script";

const cardNumber = document.getElementById("cardNumber");
const cardNumberUser = document.querySelector(".frontCard__cardNumber");
const cardName = document.getElementById("cardName");
const cardNameUser = document.querySelector(".frontCard__holder__name");
const optionMonth = document.getElementById("optionMonth");
const optionYear = document.getElementById("optionYear");
const expiresDate = document.querySelector(".frontCard__expires__date");

// Function Check if number are correct

// function checkLenght(array) {
//   if (array.length <= 4) {
//     console.log(array);
//   } else {
//     array.pop();
//     alert("No More Then 4!");
//   }
// }

// cardNumber.addEventListener("input", function () {
//   let array = [];

//   const value = cardNumber.value;
//   const arrayNumber = array.push(value);
//   console.log(arrayNumber);
//   // arrayNumber.forEach(function (a, i) {
//   //   console.log(a, i);
//   // });
//   cardNumberUser.innerHTML = `
//     <div class="frontCard__cardNumber__numbers">${arrayNumber[0]}</div>
//     <div class="frontCard__cardNumber__numbers">${arrayNumber[1]}</div>
//     <div class="frontCard__cardNumber__numbers">${arrayNumber[2]}</div>
//     <div class="frontCard__cardNumber__numbers">${arrayNumber[3]}</div>`;
// });

cardName.addEventListener("input", function () {
  const value = cardName.value;
  cardNameUser.innerHTML = `<div class="frontCard__cardNumber__numbers">${value}</div>`;
});

optionMonth.addEventListener("keydown", function (e) {
  if (e.key == "Tab") {
    const month = optionMonth.value;
    expiresDate.innerHTML = `<div class="frontCard__expires__date">${month}/</div>`;
  }
});

const frontCard = document.querySelector(".frontCard");
const backCard = document.querySelector(".backCard");
const inputCvv = document.querySelector(".options__cvvInput");

inputCvv.addEventListener("focus", function () {
  frontCard.style.transform = "rotate(360deg)";
  frontCard.style.display = "none";
  backCard.style.display = "block";
});
