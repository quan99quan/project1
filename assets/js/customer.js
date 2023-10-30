let idUser=localStorage.getItem("checkLogin")||[];
function renderUsers() {
    let users=JSON.parse(localStorage.getItem("listUsers"))||[];
    let element="";
   
    for(let i=0;i< users.length;i++){
   
        element+=
        `
        <tr>
        <td>${i+1}</td>
       <td>${users[i].name}</td>
        <td>${users[i].email}</td>
        <td>${users[i].password}</td>
        <td>${users[i].idUser}</td>
        <td>
  <div>${users[i].cartUser.length > 0 ? users[i].cartUser.map(item => item.name).join(", ") : ""}</div>
  
 
  </td>
        <td>
        <button onclick="deleteUser(${users[i].idUser})" >Delete</button>
        <button onclick="editUser(${users[i].idUser})" >Edit</button>
        <button onclick="blockUser(${users[i].idUser})" >Block</button>
        <button onclick="unBlockUser(${users[i].idUser})" >UnBlock</button>
        </td>
       </tr>
        `
     
       
    }
    document.getElementsByClassName("user")[0].innerHTML=element;
}
renderUsers()




// Block user
function blockUser(userId) {
  let blockedUsers = JSON.parse(localStorage.getItem("blockedUsers")) || [];
  let users = JSON.parse(localStorage.getItem("listUsers")) || [];
  let index = users.find(user =>{
    
      return user.idUser == userId
    } );
    let index2 = blockedUsers.find(user =>{
    
      return user.idUser == userId
    } );
 
    if (index) {
      if (index2) {
       showBlock()
        return;
      }
      blockedUsers.push(index);
      localStorage.setItem("blockedUsers", JSON.stringify(blockedUsers));
      
      showBlock()
      
    }
  
 

}
// Unblock user
function unBlockUser(userId) {
  let blockedUsers = JSON.parse(localStorage.getItem("blockedUsers")) || [];
  let users = JSON.parse(localStorage.getItem("listUsers")) || [];
  let index = users.find(user =>{
    
      return user.idUser == userId
    } );
    
   
    if (index ) {
      blockedUsers.splice(index,1);
      localStorage.setItem("blockedUsers", JSON.stringify(blockedUsers));
      
      showUnBlock()
    } 
}



// xóa user
function deleteUser(id) {
  let users = JSON.parse(localStorage.getItem("listUsers")) || [];
let index = users.findIndex(user =>{
    return user.idUser == id
  } );
  
  if (index >=0) {
  let check = confirm("Are you sure?");
    if (check) {
      users.splice(index, 1);
      localStorage.setItem("listUsers", JSON.stringify(users));
      renderUsers();
    }
  }
}


// Lấy các phần tử HTML cần thao tác
const editForm = document.querySelector('.edit-form');
const saveButton = document.querySelector('#save-button');
const editNameInput = document.querySelector('#edit-name');
const editEmailInput = document.querySelector('#edit-email');
const editPasswordInput = document.querySelector('#edit-password');
const editIdUserInput = document.querySelector('#edit-idUser');
// Hàm để hiển thị khung chỉnh sửa và điền thông tin người dùng vào các trường nhập liệu
function editUser(idProduct) {
  // Hiển thị khung chỉnh sửa
  editForm.style.display = 'block';
 // Tìm người dùng tương ứng với idProduct và điền thông tin vào các trường nhập liệu
  let users = JSON.parse(localStorage.getItem('listUsers')) || [];
  let userIndex = users.findIndex(user => user.idUser == idProduct);
  if (userIndex >=0) {
    const user = users[userIndex];
    editNameInput.value = user.name;
    editEmailInput.value = user.email;
    editPasswordInput.value = user.password;
    editIdUserInput.value = user.idUser;
// Đăng ký sự kiện click cho nút "Save" trong khung chỉnh sửa
    saveButton.addEventListener('click', () => {
      // Lấy thông tin từ các trường nhập liệu
      const editedName = editNameInput.value;
      const editedEmail = editEmailInput.value;
      const editedPassword = editPasswordInput.value;
      const editedIdUser = editIdUserInput.value;
// Thay đổi thông tin người dùng đã tìm thấy
      users[userIndex].name = editedName;
      users[userIndex].email = editedEmail;
      users[userIndex].password = editedPassword;
      users[userIndex].idUser = editedIdUser;
// Lưu lại danh sách người dùng đã được chỉnh sửa vào localStorage
      localStorage.setItem('listUsers', JSON.stringify(users));
// Cập nhật giao diện hiển thị danh sách người dùng
      renderUsers();
// Ẩn khung chỉnh sửa
      editForm.style.display = 'none';
    });
  }
}
// Đăng ký sự kiện click cho nút "Edit" trong bảng người dùng
const editButtons = document.querySelectorAll('.edit-button');
editButtons.forEach(button => {
  button.addEventListener('click', () => {
    const idProduct = button.dataset.id;
    editUser(idProduct);
  });
});

function closeEdit() {
  document.querySelector(".edit-form").style.display="none";
}


