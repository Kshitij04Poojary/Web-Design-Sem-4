function nextStep(step) {
    const currentStep = document.getElementById(`step${step}`);
    const nextStep = document.getElementById(`step${step + 1}`);

    if (validateStep(step)) {
        currentStep.classList.add('hidden');
        nextStep.classList.remove('hidden');
    }
}

function prevStep(step) {
    const currentStep = document.getElementById(`step${step}`);
    const prevStep = document.getElementById(`step${step - 1}`);

    currentStep.classList.add('hidden');
    prevStep.classList.remove('hidden');
}

function validateStep(step) {
    if (step === 1) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        const nameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        if (!nameRegex.test(name)) {
            alert('Please enter your full name with first name and last name separated by a space.');
            return false;
        }
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10 digit mobile number.');
            return false;
        }
    }
    else if (step === 2) {
        const address = document.getElementById('address').value.trim();
        const pincode = document.getElementById('pincode').value.trim();

        const addressWords = address.split(' ').filter(word => word !== '').length;
        const pincodeRegex = /^\d{6}$/;

        if (addressWords < 5) {
            alert('Address should have a minimum of 5 words.');
            return false;
        }
        if (!pincodeRegex.test(pincode)) {
            alert('Please enter a valid 6 digit pincode.');
            return false;
        }
    }
    return true;
}

document.getElementById('stepForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/;

    if (!passwordRegex.test(password)) {
        alert('Password should have at least 8 characters, including one uppercase letter, one special character, and one number.');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    alert('Form submitted successfully!');
    document.getElementById('stepForm').reset();
    document.getElementById('step1').classList.remove('hidden');
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.add('hidden');
});
