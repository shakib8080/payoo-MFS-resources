// login page use  event ,,without function
document
  .getElementById("loging-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const contect = document.getElementById("contact-id").value;
    const pin = document.getElementById("pin-id").value;
    if (contect.length === 11) {
      window.location.href = "./main.html";
      if (pin === "1234") {
        window.location.href = "./main.html";
      } else {
        alert("pin is incorect");
      }
    } else {
      alert("please provide currect number");
    }
  });
