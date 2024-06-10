const list = document.querySelectorAll(".list");

function activeLink(){
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
item.addEventListener("mouseover", activeLink));

document.querySelectorAll(".list").forEach((item) => {
    item.addEventListener("mouseout", () => {
        item.classList.remove("active");
    });
});

document.getElementById('lineicon').addEventListener('click', function() {
    var menu = document.querySelector('.navigation ul');
    menu.classList.toggle('show');
});

// // Function to show specific sections
// function showSection(sectionId) {
//     const sections = document.querySelectorAll('.section');
//     sections.forEach(section => {
//         section.classList.add('hidden');
//     });
//     document.getElementById(sectionId).classList.remove('hidden');
// }

// // Function to validate the form
// function validateForm() {
//     let isValid = true;

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;

//     const nameError = document.getElementById('nameError');
//     const emailError = document.getElementById('emailError');

//     // Name validation
//     if (!name) {
//         nameError.classList.remove('hidden');
//         isValid = false;
//     } else {
//         nameError.classList.add('hidden');
//     }

//     // Email validation
//     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     if (!email.match(emailPattern)) {
//         emailError.classList.remove('hidden');
//         isValid = false;
//     } else {
//         emailError.classList.add('hidden');
//     }

//     // If form is valid, show success message
//     if (isValid) {
//         document.getElementById('dynamicContent').innerText = 'Form submitted successfully!';
//     }
// }




const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("passwordCheck");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
})

const sendData = (sRate, count) => {
    if (sRate === count) {
        alert('Registered Successfully!');
    }
}

const successMessage = () => {
    let formCon = document.getElementsByClassName("form-control");
    let count = formCon.length;
    let sRate = 0;

    for (let i = 0; i < formCon.length; i++) {
        if (formCon[i].classList.contains("success")) {
            sRate++;
        }
    }

    sendData(sRate, count);
}


const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const confirmPasswordVal = confirmPassword.value.trim();

    if (usernameVal === "") {
        setErrorMsg(username, 'Username cannot be blank');
    } else if (usernameVal.length <= 3) {
        setErrorMsg(username, 'Username cannot be shorter than 4 characters');
    } else {
        setSuccessMsg(username);
    }

    if (emailVal === "") {
        setErrorMsg(email, 'Email cannot be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Invalid email');
    } else {
        setSuccessMsg(email);
    }

    if (phoneVal === "") {
        setErrorMsg(phone, 'Phone number cannot be blank');
    } else if (phoneVal.length !== 10) {
        setErrorMsg(phone, 'Phone number must be 10 digits');
    } else {
        setSuccessMsg(phone);
    }

    if (passwordVal === "") {
        setErrorMsg(password, 'Password cannot be blank');
    } else if (passwordVal.length < 5) {
        setErrorMsg(password, 'Password cannot be less than 5 characters');
    } else {
        setSuccessMsg(password);
    }

    if (confirmPasswordVal === "") {
        setErrorMsg(confirmPassword, 'Password cannot be blank');
    } else if (passwordVal !== confirmPasswordVal) {
        setErrorMsg(confirmPassword, 'Passwords do not match');
    } else {
        setSuccessMsg(confirmPassword);
    }

    successMessage();

}

function setErrorMsg(input, errormsg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.classList.add("error");
    formControl.classList.remove("success");
    small.innerText = errormsg;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.classList.add("success");
    formControl.classList.remove("error");
}
