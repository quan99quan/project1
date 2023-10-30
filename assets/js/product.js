const USDollar=new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
})
const VND=new Intl.NumberFormat('vi-VN',{
    style:'currency',
    currency:'VND'
})

function renderListProduct() {
    let listProducts=JSON.parse(localStorage.getItem("listProducts"))
    let result = "";
    
    for (let i = 0; i < listProducts.length; i++) {
      let a = listProducts[i].img ? listProducts[i].img.substring(3) : '';
      let b = listProducts[i].img1 ? listProducts[i].img1.substring(3) : '';
      let c = listProducts[i].img2 ? listProducts[i].img2.substring(3) : '';
      let d = listProducts[i].img3 ? listProducts[i].img3.substring(3) : '';
      
        result += `
       
    <tr>
        <td>${i+1}</td>
        <td >${listProducts[i].type}</td>
        <td >${listProducts[i].name}</td>
        <td>${Number(listProducts[i].quantity)}</td>
        <td>${listProducts[i].id}</td>
        <td>${USDollar.format(listProducts[i].price)}</td>
        <td >
        <img src="/assets/${a}" alt="Product Image"/>
        <img src="/assets/${b}" alt="Product Image"/>
        <img src="/assets/${c}" alt="Product Image"/>
        <img src="/assets/${d}" alt="Product Image"/>
        </td>
        <td>
        <button class="edit" onclick="editProducts(${listProducts[i].id})">Edit</button>
        <button onclick="deleteProducts(${listProducts[i].id})" class="delete">Delete</button>
        </td>
    </tr>  
        `
    

    }
document.querySelector(".card").innerHTML=result;

}
renderListProduct()

// xóa products
function deleteProducts(id) {
    let products = JSON.parse(localStorage.getItem("listProducts")) || [];
    
  let index = products.findIndex(products =>{
      return products.id == id
    } );
   
    if (index >=0) {
    let check = confirm("Are you sure?");
      if (check) {
        products.splice(index, 1);
        localStorage.setItem("listProducts", JSON.stringify(products));
        renderListProduct();
      }
    }
  }

  // function tạo id
function createId() {
  return Math.floor(Math.random()*999999 +new Date().getMilliseconds())
}
function addProducts() {
  let products =JSON.parse(localStorage.getItem('listProducts'))||[];
  const name=document.getElementById("add-name").value;
  const price=document.getElementById("add-price").value;
  const type=document.getElementById("add-type").value;
  const quantity = parseInt(document.getElementById("add-quantity").value);

  
const img=document.getElementById("add-image").value;
const img1=document.getElementById("add-image1").value;
  const img2=document.getElementById("add-image2").value;
  const img3=document.getElementById("add-image3").value;
  let a = img.substring(12);
  let b = img1.substring(12);
  let c = img2.substring(12);
  let d = img3.substring(12);
  let path = "../images/productItems/nha/";
  let result = path + a;
  let result1 = path + b;
  let result2 = path + c;
  let result3 = path + d;
let product={
  id:createId(),
  img : result,
  img1: result1,
  img2: result2,
  img3 : result3,
  quantity,
  name,
  type,
  price,
}
products.unshift(product)
localStorage.setItem("listProducts",JSON.stringify(products))
renderListProduct();  
document.getElementById("add-name").value = "";
document.getElementById("add-price").value = "";
document.getElementById("add-type").value = "";
document.getElementById("add-quantity").value = "";
document.getElementById("add-image").value = "";
document.getElementById("add-image1").value = "";
document.getElementById("add-image2").value = "";
document.getElementById("add-image3").value = "";
document.getElementById("image-preview").src = "";
document.getElementById("image1-preview").src = "";
document.getElementById("image2-preview").src = "";
document.getElementById("image3-preview").src = "";

} 

// function add products

// var productId = 'my-id';
// function addProducts(id) {
  
//   var value = (id ? "scale(1)" : "scale(0)");
  
//   var div = document.getElementsByClassName('containAccountProducts')[0];
//   div.style.transform = value;
  
//   const name=document.getElementById("add-name").value;
//   const price=document.getElementById("add-price").value;
//   const img=document.getElementById("add-image").value;
// const img1=document.getElementById("add-image1").value;
//   const img2=document.getElementById("add-image2").value;
//   const img3=document.getElementById("add-image3").value;
//   let a = img.substring(12);
//   let b = img1.substring(12);
//   let c = img2.substring(12);
//   let d = img3.substring(12);
//   let path = "../images/productItems/nha/";
//   let result = path + a;
//   let result1 = path + b;
//   let result2 = path + c;
//   let result3 = path + d;
// let product={
//   id:createId(),
//   img : result,
//   img1: result1,
//   img2: result2,
//   img3 : result3,
//   name,
//   price,
// }
// let products =JSON.parse(localStorage.getItem('listProducts'))||[];

// products.unshift(product)
// localStorage.setItem("listProducts",JSON.stringify(products))

// }


// Đăng ký sự kiện click cho nút "Add" trong bảng người dùng
// const addButtons = document.querySelectorAll('.add-button');
// addButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const idProduct = button.dataset.id;
//     addProducts(idProduct);
    
//   });
// });



  
// const closeButtonAdd = document.getElementById('closeAdd');
// closeButtonAdd.addEventListener('click', () => {
//   addProducts(false);
  
// });
 





// function edit products
function editProducts(id) {
  var value = (id ? "scale(1)" : "scale(0)");
  
  var div = document.getElementsByClassName('containAccount')[0];
  div.style.transform = value;

  let products = JSON.parse(localStorage.getItem('listProducts')) || [];

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      document.getElementById("edit-name").value = products[i].name;
      document.getElementById("edit-price").value = products[i].price;
      document.getElementById("edit-type").value = products[i].type;
      document.getElementById("edit-quantity").value = products[i].quantity;

      document.getElementById("edit-image").value = ""; 
      document.getElementById("edit-image1").value = ""; 
      document.getElementById("edit-image2").value = ""; 
      document.getElementById("edit-image3").value = ""; 

 var saveButton = document.getElementById("save-button");
      saveButton.onclick = function() {
     
        var name = document.getElementById("edit-name").value;
        var price = document.getElementById("edit-price").value;
        var type = document.getElementById("edit-type").value;
        var quantity = parseInt(document.getElementById("edit-quantity").value);
       
        var image = document.getElementById("edit-image").value;
        var image1 = document.getElementById("edit-image1").value;
        var image2 = document.getElementById("edit-image2").value;
        var image3 = document.getElementById("edit-image3").value;
       
        let a = image.substring(12);
        let b = image1.substring(12);
        let c = image2.substring(12);
        let d = image3.substring(12);
        
        let path = "../images/productItems/nha/";
       
let result = path + a;

let result1 = path + b;
let result2 = path + c;
let result3 = path + d;
var updatedProduct = {
          id,
          name,
          price,
          quantity,
          img:`${path}${a}` ,
         type,
          img1: result1,
          img2: result2,
          img3: result3,
        };
        console.log("image",updatedProduct.image);
products[i] = updatedProduct;
console.log(products[i]);
       
        localStorage.setItem('listProducts', JSON.stringify(products));
console.log(typeof quantity);
       
        renderListProduct(); 
      };

      break;
    }
  }
}

// Đăng ký sự kiện click cho nút "Edit" trong bảng người dùng
const editButtons = document.querySelectorAll('.edit-button');
editButtons.forEach(button => {
  button.addEventListener('click', () => {
    const idProduct = button.dataset.id;
    editProducts(idProduct);
  });
});

// Đăng ký sự kiện click cho nút "close" trong bảng người dùng
// const closeButtons = document.querySelectorAll('.close-button');
// closeButtons.forEach(button => {
//   button.addEventListener('click', () => {
// const idProduct = button.dataset.id;
//   editProducts(idProduct);
//   addProducts(idProduct);
//   });
// });


const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => {
  editProducts(false);
  
});








// function hiện hình ảnh
function previewImage(event) {
  var input = event.target;
  var preview = document.getElementById('image-preview');

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      preview.setAttribute('src', e.target.result);
      preview.style.display = 'block';
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.style.display = 'none';
  }
}


function previewImage1(event) {
  var input = event.target;
  var preview = document.getElementById('image1-preview');

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      preview.setAttribute('src', e.target.result);
      preview.style.display = 'block';
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.style.display = 'none';
  }
}

function previewImage2(event) {
  var input = event.target;
  var preview = document.getElementById('image2-preview');

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      preview.setAttribute('src', e.target.result);
      preview.style.display = 'block';
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.style.display = 'none';
  }
}

function previewImage3(event) {
  var input = event.target;
  var preview = document.getElementById('image3-preview');

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      preview.setAttribute('src', e.target.result);
      preview.style.display = 'block';
      
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    preview.style.display = 'none';
  }
}