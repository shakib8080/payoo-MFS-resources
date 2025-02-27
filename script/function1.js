// find input value with function
function getInputValueById(id) {
  const elementValues = document.getElementById(id).value;
  const convertedValue = parseFloat(elementValues);
  return convertedValue;
}
// find inner Text with function
function getInnerTextValueById(id) {
  const innerText = document.getElementById(id).innerText;
  const convertedInnerTextValue = parseFloat(innerText);
  return convertedInnerTextValue;
}
// find innerText-Value with function
/* function */
function innerTextValueById(id, value) {
  document.getElementById(id).innerText = value;
}
/* function */

//  addmoney use to function and transaction page
document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const addNewMoney = getInputValueById("addmoney-id");
  console.log(addNewMoney);
  const pin = getInputValueById("pin-id");
  const contact = document.getElementById("number-id").value;
  const mainBalance = getInnerTextValueById("main-amount-id");
  const allBankList = document.getElementById("all-bank").value;

  if (addNewMoney > mainBalance) {
    alert("insufficient  balance");
    return;
  }
  if (contact.length === 11) {
    if (pin === 1234) {
      const sum = mainBalance + addNewMoney;
      innerTextValueById("main-amount-id", sum);
      const transactionDiv = document.getElementById("transaction-div");
      let div = document.createElement("div");
      transactionDiv.classList.add("bg-red-400");
      transactionDiv.classList.add("rounded-lg");
      const date = new Date();
      div.innerHTML = `
       <ol class="px-8 py-6">
        <li><p class="text-black">date ${date}</p></li>
        <li><p class="text-black">Mathod: ${allBankList}</p></li>
        <li><p> Add Money Amount: <span class="text-green-700 font-bold">${addNewMoney}<span></p></li>
        <li><p> Account Number : <span class="text-black font-bold">${contact}<span></p></li>
        </ol>
      `;
      transactionDiv.appendChild(div);
    } else {
      alert("incorrect pin");
    }
  } else {
    alert("invalid number");
  }
});

// by default
document.getElementById("addmoney").style.display = "none";
document.getElementById("cashout").style.display = "none";
document.getElementById("transaction-section-id").style.display = "none";
document.getElementById("addmoney").style.display = "none";
// function
function clickToDisplayNone(id, status) {
  document.getElementById(id).style.display = status;
}
// function

// use to function display block and none
document
  .getElementById("addmoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    clickToDisplayNone("addmoney", "block");
    clickToDisplayNone("cashout", "none");
    clickToDisplayNone("transaction-section-id", "none");
  });
document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    clickToDisplayNone("cashout", "block");
    clickToDisplayNone("addmoney", "none");
    clickToDisplayNone("transaction-section-id", "none");
  });

// cashout with function  and transacton page
document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutPIn = getInputValueById("cashout-pin");
    const cashoutAmount = getInputValueById("amount-id");
    const mainValue = getInnerTextValueById("main-amount-id");
    const agenNumber = document.getElementById("Agent-id").value;

    if (mainValue < 0) {
      alert("invalid amount");
      return;
    }
    if (agenNumber.length === 11) {
      if (cashOutPIn === 1234) {
        const sum = mainValue - cashoutAmount;
        innerTextValueById("main-amount-id", sum);
        const date = new Date();
        const transactionDiv = document.getElementById("transaction-div");
        const div = document.createElement("div");
        transactionDiv.classList.add("bg-red-400");
        transactionDiv.classList.add("rounded-lg");
        div.innerHTML = `
        <ol class="px-8 py-6">
        <li><p class="text-black">date ${date}</p></li>
        <li><p> CashOut Amount: <span class="text-green-700 font-bold">${cashoutAmount}<span></p></li>
        <li><p> Account Number : <span class="text-black font-bold">${agenNumber}<span></p></li>
        </ol>
        
        
        
        
        `;
        transactionDiv.appendChild(div);
      } else {
        alert("pin is invalid");
      }
    } else {
      alert("number is invalid");
    }
  });

// cash out history

document
  .getElementById("transaction-id")
  .addEventListener("click", function (event) {
    event.preventDefault();
    clickToDisplayNone("cashout", "none");
    clickToDisplayNone("addmoney", "none");
    clickToDisplayNone("transaction-section-id", "block");
  });
