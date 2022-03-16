"use script";

const cardNumber = document.getElementById("cardNumber");
const cardNumberUser = document.querySelector(".frontCard__cardNumber");
const cardName = document.getElementById("cardName");
const cardNameUser = document.querySelector(".frontCard__holder__name");
const optionMonth = document.getElementById("optionMonth");
const optionYear = document.getElementById("optionYear");
const expiresDate = document.querySelector(".frontCard__expires__date");

cardNumber.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    const value = cardNumber.value;
    const arrayNumber = value.split(" ");

    cardNumberUser.innerHTML = `        
    <div class="frontCard__cardNumber__numbers">${arrayNumber[0]}</div>
    <div class="frontCard__cardNumber__numbers">${arrayNumber[1]}</div>
    <div class="frontCard__cardNumber__numbers">${arrayNumber[2]}</div>
    <div class="frontCard__cardNumber__numbers">${arrayNumber[3]}</div>`;
  }
});

cardName.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    const value = cardName.value;
    cardNameUser.innerHTML = `<div class="frontCard__cardNumber__numbers">${value}</div>`;
  }
});

optionMonth.addEventListener("keydown", function (e) {
  if (e.key == "Tab") {
    const month = optionMonth.value;
    expiresDate.innerHTML = `<div class="frontCard__expires__date">${month}/</div>`;
  }
});

