function viewData() {
  var viewdata = localStorage.getItem('product');
  var view = JSON.parse(viewdata);

  var data = "<table border='1' cellspacing='0' style='width: 84%; margin: 0 100px;'><tr><th  style='padding: 10px 0;background-color:#77B0AA;'>Name</th><th style=';background-color:#77B0AA;'>Price</th><th style=';background-color:#77B0AA;'>Image</th><th style=';background-color:#77B0AA;'>Quality</th><th style=';background-color:#77B0AA;'>Delete</th></tr>";

  for (var i = 0; i < view.length; i++) {
    data += `<tr>`;
    data += `<td style="text-align: center;">${view[i]['name']}</td>`;
    data += `<td style="text-align: center;">${view[i]['price']}<i class="ri-money-rupee-circle-line"></i></td>`;
    data += `<td style="text-align: center;"><img src="img/${view[i]['img']}" width="100px"/></td>`;
    data += `<td style="text-align: center;">${view[i]['quality']}</td>`;
    data += `<td style="text-align:center;"><a style="text-decoration:none; background-color: #FF7F3E;color:white; padding: 15px 20px;" href="javascript:deleteData(${view[i]['no']})"><i class='ri-delete-bin-6-line' style="margin-right:5px;"></i>Delete</a></td>`;
    data += `</tr>`;

  }
  data += "</table>";
  document.getElementById('res').innerHTML = data;
}
viewData();

function deleteData(no) {
  var dedata = localStorage.getItem('product');
  var ddata = JSON.parse(dedata);

  for (var i = 0; i < ddata.length; i++) {
    if (ddata[i]['no'] == no) {
      ddata.splice(i, 1);
    }
  }

  localStorage.setItem('product', JSON.stringify(ddata));

  viewData();
}
function searchProduct() {
  var searchItem = document.getElementById('search').value;

  var search = localStorage.getItem('product');
  var record = JSON.parse(search);

  var data = "<table border='1' cellspacing='0' style='width: 84%; margin: 0 100px;'><tr><th  style='padding: 10px 0;background-color:#77B0AA;'>Name</th><th style=';background-color:#77B0AA;'>Price</th><th style=';background-color:#77B0AA;'>Image</th><th style=';background-color:#77B0AA;'>Quality</th><th style=';background-color:#77B0AA;'>Delete</th></tr>";

  record.forEach((p_name, i) => {
    if (p_name.name.match(searchItem)) {
      data += `<tr>`;
      data += `<td style="text-align: center;">${p_name.name}</td>`;
      data += `<td style="text-align: center;">${p_name.price}<i class="ri-money-rupee-circle-line"></i></td>`;
      data += `<td style="text-align: center;"><img src="img/${p_name.img}" width="100px"/></td>`;
      data += `<td style="text-align: center;">${p_name.quality}</td>`;
      data += `<td style="text-align:center;"><a style="text-decoration:none; background-color: #FF7F3E;color:white; padding: 15px 20px;" href="javascript:deleteData(${p_name.no})"><i class='ri-delete-bin-6-line' style="margin-right:5px;"></i>Delete</a></td>`;
      data += `</tr>`;
    }
  });
  data += "</table>";
  document.getElementById('res').innerHTML = data;
}

