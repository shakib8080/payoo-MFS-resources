// use event cashout without function
document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pin2 = document.getElementById("cashout-pin").value;
    console.log(pin2);
    const convertedPin = parseInt(pin2);

    const cashOutAmount = document.getElementById("amount-id").value;
    const convertCashOutAmount = parseInt(cashOutAmount);

    const mainAmount = document.getElementById("main-amount-id").innerText;
    const convertedMainAmount = parseInt(mainAmount);
    if (convertedPin === 1234) {
      const finalOutput = convertedMainAmount - convertCashOutAmount;
      document.getElementById("main-amount-id").innerText = finalOutput;
    } else {
      alert("plese invalid pin");
    }
  });
