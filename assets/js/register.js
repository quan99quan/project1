function uuid() {
    return new Date().getMilliseconds() + Math.floor(Math.random() * 999999999)
}

document.addEventListener("DOMContentLoaded", function () {
    Validator({
        form: "#form-1",
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        onSubmit: function (data) {
            console.log(data)
            let listUsers = JSON.parse(localStorage.getItem("listUsers")) || []
            let flag = true;
            let name=document.getElementById("name").value;
            let email=document.getElementById("email").value;
            let password=document.getElementById("password").value;
            let confirmPassword=document.getElementById("confirmPassword").value;
            if(name == ""|| email==""||password==""||confirmPassword=="") {
                showFailNaN()
                flag = false;
                
            }
            if( password.length<2) {
                console.log(password.length);
                showFailLengthPassword()
                flag = false;
                return;
            }
            if(data.password!==data.confirmPassword ) {
                showFailPassword()
                flag = false;
                return;
            }
            for (let i = 0; i < listUsers.length; i++) {
               

                //kiểm tra email user đăng ký đã tồn tại chưa
                if(listUsers[i].email == data.email) {
                    showFailEmail()
                    flag = false;
                    break;
                }
              
              
            }
          
            //email user đăng ký chưa tồn tại => cho đăng ký
            if(flag) {
                data.idUser = uuid()
                data.card = [];
                data.cartUser = []
                listUsers.push(data)
                localStorage.setItem("listUsers", JSON.stringify(listUsers))
                showSuccessRegisterToast()
                function changeToLoginPage() {
                    window.location.href = "../pages/login.html"
                }

                setTimeout(changeToLoginPage, 1000)
            }
        }
    })
})