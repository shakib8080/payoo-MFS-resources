// add money event without function

document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const addmoney = document.getElementById("addmoney-id").value;
  //   new money
  const corvertInputValue = parseFloat(addmoney);
  //   new money

  //   main value
  let mainMoney = document.getElementById("main-amount-id").innerText;
  //   main value
  const corvertMainValue = parseFloat(mainMoney);
  //   main value

  const pin = document.getElementById("pin-id").value;
  const convertPin = parseInt(pin);

  const contact = document.getElementById("number-id").value;
  const convertContact = parseInt(contact);
  if (convertPin === 1234) {
    const sum = corvertInputValue + corvertMainValue;
    document.getElementById("main-amount-id").innerText = sum;
  } else {
    alert("pin invalid");
  }
});
