document.addEventListener("DOMContentLoaded", function() {
    const slidePage = document.querySelector(".slide-page");
    const nextBtnFirst = document.querySelector(".firstNext");
    const prevBtnSec = document.querySelector(".prev-1");
    const nextBtnSec = document.querySelector(".next-1");
    const prevBtnThird = document.querySelector(".prev-2");
    const nextBtnThird = document.querySelector(".next-2");
    const prevBtnFourth = document.querySelector(".prev-3");
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
        const branch = document.querySelector("select[name='branch']").value;
        const semester = document.querySelector("#semester").value;

        if (!branch || !semester) {
            alert("Please select both branch and semester.");
            return false;
        }

    

        return true;
    }

    function validateFourthPage() {
        console.log("Validating fourth page...");
        const password = document.querySelector("input[name='password']").value;
        const confirmPassword = document.querySelector("input[name='confirmPassword']").value;
    
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
    
        if (password !== confirmPassword) {
            alert("Password and Confirm Password must match.");
            return false;
        }
    
        console.log("Validation passed!");
        return true;
    }

    nextBtnFirst.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateFirstPage()) {
            console.log("Moving to the second page.");
            slidePage.style.marginLeft = "-25%";
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        }
    });

    nextBtnSec.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateSecondPage()) {
            console.log("Moving to the third page.");
            slidePage.style.marginLeft = "-50%";
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        }
    });

    nextBtnThird.addEventListener("click", function(event) {
        event.preventDefault();
        if (validateThirdPage()) {
            console.log("Moving to the fourth page.");
            slidePage.style.marginLeft = "-75%";
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;
        }
    });

    submitBtn.addEventListener("click", function(event) {
        if (validateFourthPage()) {
            console.log("Form submitted successfully.");
            // Additional actions can be added here, such as form submission
        }
    });
    
    

    prevBtnSec.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Going back to the first page.");
        slidePage.style.marginLeft = "0%";
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    });

    prevBtnThird.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Going back to the second page.");
        slidePage.style.marginLeft = "-25%";
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    });

    prevBtnFourth.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Going back to the third page.");
        slidePage.style.marginLeft = "-50%";
        bullet[current - 2].classList.remove("active");
        progressCheck[current - 2].classList.remove("active");
        progressText[current - 2].classList.remove("active");
        current -= 1;
    });

  
    showPasswordsCheckbox.addEventListener('change', function () {
        const type = showPasswordsCheckbox.checked ? 'text' : 'password';
        passwordField.type = type;
        confirmPasswordField.type = type;
    });

    form.addEventListener('submit', function (e) {
        if (passwordField.value !== confirmPasswordField.value) {
            e.preventDefault();
            alert('Passwords do not match!');
        }
    });

    // Dynamic update of semester options based on selected branch
    const branchSelect = document.querySelector("select[name='branch']");
    const semesterSelect = document.querySelector("#semester");

    // Add event listener to branch selection dropdown
    branchSelect.addEventListener('change', function () {
        const selectedBranch = branchSelect.value;
        // Update semester options based on the selected branch
        updateSemesterOptions(selectedBranch);
    });

    function updateSemesterOptions(selectedBranch) {
        // Clear existing options
        semesterSelect.innerHTML = '';

        // Define semester options based on the selected branch
        let semesterOptions;
        if (selectedBranch === 'MCA' || selectedBranch === 'M.tech') {
            semesterOptions = [
                { value: '1', text: 'Select Semester' },
                { value: '2', text: '1st' },
                { value: '3', text: '2nd' },
                { value: '4', text: '3rd' },
                { value: '5', text: '4th' }
            ];
        } else if (selectedBranch === 'BCA') {
            semesterOptions = [
                { value: '1', text: 'Select Semester' },
                { value: '2', text: '1st' },
                { value: '3', text: '2nd' },
                { value: '4', text: '3rd' },
                { value: '5', text: '4th' },
                { value: '6', text: '5th' },
                { value: '7', text: '6th' },
            ];
        } else if (selectedBranch === 'B.tech') {
            semesterOptions = [
                { value: '1', text: 'Select Semester' },
                { value: '2', text: '1st' },
                { value: '3', text: '2nd' },
                { value: '4', text: '3rd' },
                { value: '5', text: '4th' },
                { value: '6', text: '5th' },
                { value: '7', text: '6th' },
                { value: '8', text: '7th' },
                { value: '9', text: '8th' }
            ];
        }

        // Add new options to the semester dropdown
        semesterOptions.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            semesterSelect.appendChild(optionElement);
        });
    }
});