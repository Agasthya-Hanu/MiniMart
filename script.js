
  const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 500,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 1500,
    category: "footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 2000,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Backpack",
    price: 1200,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Shirt",
    price: 800,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1583743814966-8936f37f4f68?auto=format&w=400"
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 800,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083"
  },
  {
    id: 7,
    name: "Mobile Phone",
    price: 80000,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    name: "Laptop",
    price: 60000,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80"
  },
  {
  id: 9,
  name: "Water Bottle",
  price: 399,
  category: "accessories",
  image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&w=600"
}


];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DISPLAY PRODUCTS
function showProducts() {
  const productDiv = document.getElementById("products");

  products.forEach(product => {
    productDiv.innerHTML += `
      <div class="product">
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

// ADD TO CART
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

// UPDATE CART
function updateCart() {
  const cartDiv = document.getElementById("cart");
  const totalSpan = document.getElementById("total");

  cartDiv.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartDiv.innerHTML += `
      <p>
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">❌</button>
      </p>
    `;
  });

  totalSpan.innerText = total;
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function showProducts(productList) {
  const productDiv = document.getElementById("products");
  productDiv.innerHTML = "";

  productList.forEach(product => {
    productDiv.innerHTML += `
      <div class="product">
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function filterProducts(category) {
  if (category === "all") {
    showProducts(products);
  } else {
    const filtered = products.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );

    showProducts(filtered);
  }
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  document.getElementById("cart").innerHTML = "<h3>✅ Order Placed!</h3>";
  document.getElementById("total").innerText = 0;
  cart = [];
}
localStorage.setItem("cart", JSON.stringify(cart));
localStorage.setItem("cart", JSON.stringify(cart));

function goToCheckout() {
  if (!cart || cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Save cart before going
  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect to checkout page
  window.location.href = "checkout.html";
}