function sentSuccess() {
    let firstName = document.getElementById("first_name");
    let phone = document.getElementById("phone_number");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    if (
        firstName.value !== "" && 
        phone.value !== "" &&
        email.value !== "" &&
        subject.value !== "" &&
        message.value !== ""
    ) {
        let success = document.getElementById("success");
        success.style.display = "inline-block";
    }
}

function sentFail() {
    let firstName = document.getElementById("first_name");
    let phone = document.getElementById("phone_number");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    if (
        firstName.value == "" && 
        phone.value == "" &&
        email.value == "" &&
        subject.value == "" &&
        message.value == ""
    ) {
        let fail = document.getElementById("fail");
        fail.style.display = "inline-block";
    }
}