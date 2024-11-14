var product =[
   
]
 
 

function addData(){
    if(localStorage.getItem('product')){
         product = JSON.parse(localStorage.getItem('product'));
    }

var name = document.getElementById('name').value;
var price = document.getElementById('price').value;
var img = document.getElementById('img').files[0].name;
var quality = document.getElementById('quality').value;

var item = {
        name : name,
        price : price,
        img : img,
        quality : quality,
        no: Math.round(Math.random() * 1000)
       }
        product.push(item);


var add = JSON.stringify(product);
localStorage.setItem('product',add);

var name = document.getElementById('name').value = "";
var price = document.getElementById('price').value = "";
var img = document.getElementById('img').files[0].name ="";
var quality = document.getElementById('quality').value ="";
}

