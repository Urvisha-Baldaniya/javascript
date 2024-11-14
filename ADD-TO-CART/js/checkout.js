function displayProducts() {
  var viewdata = localStorage.getItem('product');
  var view = JSON.parse(viewdata);
  var data = "<table border='1' cellspacing='0' style='width: 84%; margin: 0 100px;'><tr><th  style='padding: 10px 0;background-color:#77B0AA;text-align: center;'>Name</th><th style=';background-color:#77B0AA;text-align: center;'>Price</th><th style='background-color:#77B0AA;text-align: center;'>Image</th><th style=';background-color:#77B0AA;text-align: center;'>Quality</th><th style=';background-color:#77B0AA;text-align: center;'>Delete</th><th style=';background-color:#77B0AA;text-align: center;'>Add To Cart</th></tr>";

  for (var i = 0; i < view.length; i++) {
      data += "<tr>";
      data += `<td style="text-align: center;">${view[i]['name']}</td>`;
      data += `<td style="text-align: center;">${view[i]['price']}<i class="ri-money-rupee-circle-line"></i></td>`;
      data += `<td style="text-align: center;"><img src="img/${view[i]['img']}" width="100px"/></td>`;
      data += `<td style="text-align: center;">${view[i]['quality']}</td>`;
      data += `<td style="text-align: center;"><a href="javascript:deletedata(${view[i]['no']})" class="delete-button">Delete</a></td>`;
      data += `<td style="text-align: center;"><button onclick='addToCart("${view[i].name}", ${view[i].price}, "${view[i].img}",${view[i].quality})' class="add-to-cart-button">Add to Cart</button></td>`;

      data += "</tr>";
  }

  data += "</table>";
  document.getElementById('res').innerHTML = data;
}

function addToCart(name, price, img, quality) {
  var cartTable = document.getElementById("cartTable");
  var data = "<tr>";
  data += "<td>" + name + "</td>";
  data += "<td>$" + price + "</td>";
  data += "<td>" + quality + "</td>";
  data += "<td><img src='img/" + img + "' width='100px'/></td>";
  data += "<td><button onclick='removeFromCart(this)' class='remove-button'>Remove</button></td>";
  data += "</tr>";
  cartTable.innerHTML += data;
  updateTotalPrice();
}
function removeFromCart(button) {
  var data = button.parentNode.parentNode;
  data.parentNode.removeChild(data);
  updateTotalPrice();
}

function updateTotalPrice() {
  var cartTable = document.getElementById("cartTable");
  var totalPrice = 0;
  for (var i = 1; i < cartTable.rows.length; i++) {
      totalPrice += parseInt(cartTable.rows[i].cells[1].innerText.replace("$", ""));
  }
  document.getElementById("totalPrice").innerText = "Total Price: $" + totalPrice;
}

displayProducts();
function deletedata(no) {
  var deldata = localStorage.getItem('product');
  var ddata = JSON.parse(deldata);
  for (var i = 0; i < ddata.length; i++) {
      if (ddata[i]['no'] == no) {
          ddata.splice(i, 1);
      }
  }
  localStorage.setItem('product', JSON.stringify(ddata));
  displayProducts();
}