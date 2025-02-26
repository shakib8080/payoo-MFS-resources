// toggle without function

document.getElementById("cashout").style.display = "none";
document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cashout").style.display = "block";
    document.getElementById("addmoney").style.display = "none";
  });

document
  .getElementById("addmoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cashout").style.display = "none";
    document.getElementById("addmoney").style.display = "block";
  });
