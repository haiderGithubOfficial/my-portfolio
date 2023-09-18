function validateForm() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const nameWarnIcon = document.getElementById("nameWarnIcon");
    const emailWarnIcon = document.getElementById("emailWarnIcon");
    const messageWarnIcon = document.getElementById("messageWarnIcon");

    const messageSuccess = document.getElementById("messageSuccess");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    name.classList.remove("border-green-teal")
    email.classList.remove("border-green-teal")
    message.classList.remove("border-green-teal")

    name.classList.remove("border-[#FF6F5B]")
    email.classList.remove("border-[#FF6F5B]")
    message.classList.remove("border-[#FF6F5B]")

    name.classList.add("border-green-teal")
    email.classList.add("border-green-teal")
    message.classList.add("border-green-teal")

    let isValid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        nameWarnIcon.classList.remove("hidden")
        name.classList.add("border-[#FF6F5B]")
        isValid = false;
    } else {
        nameWarnIcon.classList.add("hidden")
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email address.";
        emailWarnIcon.classList.remove("hidden")
        email.classList.add("border-[#FF6F5B]")
        isValid = false;
    } else {
        if (!email.value.match(/^\S+@\S+\.\S+$/)) {
            emailError.textContent = "Please enter a valid email address.";
            emailWarnIcon.classList.remove("hidden");
            email.classList.add("border-[#FF6F5B]");
            isValid = false;
        } else {
            emailWarnIcon.classList.add("hidden")
        }
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Please enter a message.";
        messageWarnIcon.classList.remove("hidden");
        message.classList.add("border-[#FF6F5B]");
        isValid = false;
    } else {
        messageWarnIcon.classList.add("hidden");
    }

    if (!isValid) {
        return false;
    }

    name.classList.add("border-green-teal")
    email.classList.add("border-green-teal")
    message.classList.add("border-green-teal")

    name.value = "";
    email.value = "";
    message.value = "";
    messageSuccess.textContent = "success!"
    messageSuccess.disabled = true
}







