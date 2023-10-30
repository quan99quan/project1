function toast({title = "", message = "", type = "info", duration = 3000}) {
    const main = document.getElementById("toast")
    if (main) {
        const toast = document.createElement("div")

        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            fail: "fas fa-exclamation-circle"
        }
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)
        toast.classList.add("toast", `toast--${type}`)
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fas fa-times"></i>
            </div>
        `;
        main.insertAdjacentElement("afterbegin",toast)
    }
}

function showLogin() {
    toast({
        title: "Fail!",
        message: "You must be logged in to make a purchase",
        type: "fail",
        duration: 1000,
    })
}

function showSuccess() {
    toast({
        title: "Success!",
        message: "The product has been added to the cart",
        type: "success",
        duration: 1000,
    })
}

function showSuccessRegisterToast() {
    toast({
        title: "Success!",
        message: "You have successfully registered!",
        type: "success",
        duration: 5000
    })
}

function showSuccessLoginToast() {
    toast({
        title: "Success!",
        message: "You have successfully login!",
        type: "success",
        duration: 5000
    })
}

function showFailLoginToast() {
    toast({
        title: "Fail!",
        message: "You have fail login!",
        type: "fail",
        duration: 5000
    })
}
function showFailRegisterToast() {
    toast({
        title: "Fail!",
        message: "You have fail register!",
        type: "fail",
        duration: 5000
    })
}
function showFailEmail() {
    toast({
        title: "Fail!",
        message: "Your gmail already exists!",
        type: "fail",
        duration: 5000
    })
}
function showFailPassword() {
    toast({
        title: "Fail!",
        message: "Passwords do not match!",
        type: "fail",
        duration: 5000
    })
}
function showFailLengthPassword() {
    toast({
        title: "Fail!",
        message: "Passwords too short!",
        type: "fail",
        duration: 5000
    })
}
function showFailNaN() {
    toast({
        title: "Fail!",
        message: " Please enter all information",
        type: "fail",
        duration: 5000
    })
}
function showFailNaN() {
    toast({
        title: "Fail!",
        message: " Please enter all information",
        type: "fail",
        duration: 5000
    })
}

function showBlockLogin() {
    toast({
        title: "Fail!",
        message: " The user has been blocked!",
        type: "fail",
        duration: 1000
    })
}
function showUnBlock() {
    toast({
        title: "Success!",
        message: "Users are out of blocks!",
        type: "success",
        duration: 1000
    })
}

function showBlock() {
    toast({
        title: "Success!",
        message: "The user has been blocked!",
        type: "success",
        duration: 1000
    })
}

function showBill() {
    toast({
        title: "Success!",
        message: "Successful payment!",
        type: "success",
        duration: 3000
    })
}
function showBillFail() {
    toast({
        title: "Fail!",
        message: "Nothing to payment!",
        type: "fail",
        duration: 3000
    })
}

function showBillCard() {
    toast({
        title: "Fail!",
        message: "No cards added!",
        type: "fail",
        duration: 2000
    })
}

function showSuccessCard() {
    toast({
        title: "Success",
        message: "Success!",
        type: "success",
        duration: 2000
    })
}