document.addEventListener("DOMContentLoaded", function() {
    Validator({
        form: "#form-2",
        formGroupSelector: ".form-group",
        errorSelector: ".form-message",
        onSubmit: function(data) {
            let listUsers = JSON.parse(localStorage.getItem("listUsers")) || [];
            let blockedUsers = JSON.parse(localStorage.getItem("blockedUsers")) || [];

            let checkUser = listUsers.find(user => {
                return user.email === data.email && user.password === data.password;
            });

            if (data.email == "admin@admin" && data.password == "admin") {
                window.location.href = "/AdminBSBMaterialDesign/index.html";
                showSuccessLoginToast();
            } else if (checkUser) {
                if (isUserBlocked(checkUser.email, blockedUsers)) {
                    showBlockLogin();
                } else {
                    console.log(checkUser.email);
                    showSuccessLoginToast();
                    localStorage.setItem("checkLogin", checkUser.idUser);

                    function goToHomePage() {
                        window.location.href = "../pages/homepage.html";
                    }

                    setTimeout(goToHomePage, 2000);
                }
            } else {
                showFailLoginToast();
            }
        }
    });
});

function isUserBlocked(email, blockedUsers) {
    return blockedUsers.some(user => user.email === email);
}