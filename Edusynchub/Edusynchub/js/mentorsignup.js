document.addEventListener("DOMContentLoaded", function() {
    const slidePage = document.querySelector(".slide-page");
    const nextBtnFirst = document.querySelector(".firstNext");
    const prevBtnSec = document.querySelector(".prev-1");
    const nextBtnSec = document.querySelector(".next-1");
    const prevBtnThird = document.querySelector(".prev-2");
    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    const showPasswordsCheckbox = document.getElementById('showPasswords');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const form = document.querySelector('form');

    let current = 1;

    function validateFirstPage() {
        const firstName = document.querySelector("input[name='firstName']").value;
        const lastName = document.querySelector("input[name='lastName']").value;
        if (!firstName || !lastName) {
            alert("Please enter your first and last name.");
            return false;
        }
        return true;
    }

    function validateSecondPage() {
        const email = document.querySelector("input[name='email']").value;
        const phoneNumber = document.querySelector("input[name='phoneNumber']").value;

        if (!email || !phoneNumber) {
            alert("Please enter your email address and phone number.");
            return false;
        }

        if (phoneNumber.length !== 10) {
            alert("Phone number must be 10 digits.");
            return false;
        }

        return true;
    }

    function validateThirdPage() {
        const password = document.querySelector("input[name='password']").value;
        const confirmPassword = document.querySelector("input[name='confirmPassword']").value;

        if (password !== confirmPassword) {
            alert("Password and Confirm Password must match.");
            return false;
        }

        return true;
    }

    nextBtnFirst.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateFirstPage()) {
            slidePage.style.marginLeft = "-33.33%";
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        }
    });

    nextBtnSec.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateSecondPage()) {
            slidePage.style.marginLeft = "-66.66%";
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        }
    });

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateThirdPage()) {
            console.log("Form submitted successfully.");
            // Additional actions can be added here, such as form submission
        }
    });

    prevBtnSec.addEventListener("click", function(event) {
        event.preventDefault();
        slidePage.style.marginLeft = "0%";
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    });

    prevBtnThird.addEventListener("click", function(event) {
        event.preventDefault();
        slidePage.style.marginLeft = "-33.33%";
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    });

    showPasswordsCheckbox.addEventListener('change', function() {
        const type = showPasswordsCheckbox.checked ? 'text' : 'password';
        passwordField.type = type;
        confirmPasswordField.type = type;
    });

    form.addEventListener('submit', function(e) {
        if (passwordField.value !== confirmPasswordField.value) {
            e.preventDefault();
            alert('Passwords do not match!');
        }
    });
});
