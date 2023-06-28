// let cart_container = document.querySelector(".cart-items-box");
// let cart_btn = document.getElementById("cart-btn");
// cart_btn.onclick = () => {
//   cart_container.classList.toggle("active");
// };

// window.onscroll = () => {
//   cart_container.classList.remove("active");
// };

function change_header() {
  let menu_bar = document.querySelector(".menuBar");
  let current = window.scrollY;
  // console.log(current);

  if (current > 120) {
    menu_bar.classList.add("menubar-fixed");
  }
  else {
    menu_bar.classList.remove("menubar-fixed");
  }
}
window.addEventListener("scroll", change_header);

// let products = [
//   {
//     id: 1,
//     name: 'Tata Salt',
//     image: '1.png',
//     price: 27
//   },
//   {
//     id: 2,
//     name: 'Tata Salt',
//     image: '2.png',
//     price: 27
//   }, {
//     id: 3,
//     name: 'Tata Salt',
//     image: '3.png',
//     price: 27
//   }, {
//     id: 4,
//     name: 'Tata Salt',
//     image: '4.png',
//     price: 27
//   }, {
//     id: 5,
//     name: 'Tata Salt',
//     image: '5.png',
//     price: 27
//   },
//   {
//     id: 6,
//     name: 'Tata Salt',
//     image: '6.png',
//     price: 27
//   }
// ];

let list = document.querySelector(".modal-card");
let total = document.querySelector('.total');
let list_Card = document.querySelector('.listCard');

// take empty array
let itemList = [];


function printCard() {
  list_Card.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  itemList.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
    <div><img src="Images/${value.image}"/></div>
    <div>${value.name}</div>
    <div>${value.price.toLocaleString()}</div>
    <div>
        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
        <div class="count">${value.quantity}</div>
        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
    </div>`;
      list_Card.appendChild(newDiv);
    }
  })
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete itemList[key];
  } else {
    itemList[key].quantity = quantity;
    itemList[key].price = quantity * products[key].price;
  }
  printCard();
}