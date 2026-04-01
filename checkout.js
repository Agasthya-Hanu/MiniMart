function placeOrder() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const payment = document.getElementById("payment").value;

  if (!name || !address || !city) {
    alert("Please fill all details!");
    return;
  }

  document.getElementById("message").innerText =
    "✅ Order placed successfully! Payment: " + payment;

  localStorage.removeItem("cart");
}

const cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => total += item.price);

document.getElementById("total").innerText = total;