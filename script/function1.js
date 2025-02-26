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

//  addmoney use to function
document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const addNewMoney = getInputValueById("addmoney-id");
  const pin = getInputValueById("pin-id");
  const contact = document.getElementById("number-id").value;
  const mainBalance = getInnerTextValueById("main-amount-id");

  if (contact.length === 11) {
    if (pin === 1234) {
      const sum = mainBalance + addNewMoney;
      innerTextValueById("main-amount-id", sum);
    } else {
      alert("incorrect pin");
    }
  } else {
    alert("invalid number");
  }
});

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
  });
document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    clickToDisplayNone("cashout", "block");
    clickToDisplayNone("addmoney", "none");
  });

// cashout with function
document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutPIn = getInputValueById("cashout-pin");
    const cashoutAmount = getInputValueById("amount-id");
    const mainValue = getInnerTextValueById("main-amount-id");
    const agenNumber = document.getElementById("Agent-id").value;

    if (agenNumber.length === 11) {
      if (cashOutPIn === 1234) {
        const sum = mainValue - cashoutAmount;
        innerTextValueById("main-amount-id", sum);
      } else {
        alert("pin is invalid");
      }
    } else {
      alert("number is invalid");
    }
  });
