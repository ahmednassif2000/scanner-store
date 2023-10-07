
/*############################
########## Login Page ########
#############################*/
let loginForm = document.getElementById('login-form');
let formErrors = document.querySelector('#login-errors');

// Add an onsubmit event handler to the form
if (loginForm !== null) {

    loginForm.onsubmit = function(a) {
        // Preventing form from submiting
        a.preventDefault(); 
        // Getting Form Inputs Values
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
    
        // console.log(username.length);
        let errors = [];
        // check if username is empty
        if (username !== '') {
            // check if username is less than 4 characters
            if (username.length < 4) {
    
                errors.push('Username must be 4 characters at least');
            }
        } else {
            errors.push('Please enter your username');
    
        }
    
        // check if password is empty
        if (password !== '') {
            // check if password is less than 4 characters
            if (password.length < 6) {
        
                errors.push('Password must be 6 characters at least');
            }
        } else {
            errors.push('Please enter your password');
    
        }
    
    
        if (errors.length == 0) {
    
            loginForm.submit()
    
        } else {
    
            formErrors.innerHTML = '';
            formErrors.style.display = 'block';
            for (i =0; i < errors.length; i++) {
    
                formErrors.innerHTML += `<div>${errors[i]}</div>`;
            }
        }
    
    };
}


/*############################
########## Feadback Page ########
#############################*/

let feedbackForm = document.getElementById('feedback-form');
let feedbackErrors = document.querySelector('#feedback-errors');
// Add an onsubmit event handler to the form
if (feedbackForm !== null) {
    
    // Getting Form Inputs Values
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let subject = document.getElementById('subject');
    let topic = document.getElementById('topic');
    let message = document.getElementById('message');

    // event handler to check that name is [A-z] on key down
    name.onkeyup = function () {
        
        let regex = /\d/g;
        if (regex.test(name.value)) {
            
            document.getElementById('name-err').style.color = 'red';
            document.getElementById('name-err').innerText = 'Name Can\'t contain digits';
            name.style.borderColor = 'red';
        } else {
            name.style.borderColor = 'unset';
            document.getElementById('name-err').innerText = '';
        }
    }

    feedbackForm.onsubmit = function(a) {
        // Preventing form from submiting
        a.preventDefault(); 
        
        console.log(topic.value);
        let errors = [];
        // check if username is empty
        if (name.value !== '') {
            // check if name is less than 4 characters
            if (name.value.length < 6) {
    
                errors.push('Name must be 6 characters at least');
            }

        } else {

            errors.push('Please enter your name');
    
        }

        // Check if the phone number is empty
        if (phone.value !== ""){
            
            let phoneRegex = /^9665[0-9]{8}$/;
            
            if (! phoneRegex.test(phone.value)) {

                errors.push('Invalid phone number');
            }
            
        }

        // Check if the Email is empty
        if (email.value !== ""){
            
            let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            
            if (! emailRegex.test(email.value)) {

                errors.push('Invalid email address');
            }
        } else {

            errors.push('Email address can\'t be empty')
        }

        // check that subject is not empty
        if (subject.value === '') {
            errors.push('Subject can\'t be empty');
        }
        // check that topic is not empty
        if (topic.value === '') {
            errors.push('Topic can\'t be empty');
        }
        // check that message is not empty
        if (message.value === '') {
            errors.push('Message can\'t be empty');
        }
        
        console.log(errors);
        if (errors.length == 0) {
    
            feedbackForm.submit()
    
        } else {
    
            feedbackErrors.innerHTML = '';
            feedbackErrors.style.display = 'block';
            for (i =0; i < errors.length; i++) {
    
                feedbackErrors.innerHTML += `<div>${errors[i]}</div>`;
            }
        }
    
    };
}

// Change Color of text, password, textarea into yellow on focus
document.addEventListener('focus', function(event) {
    
    if (event.target.getAttribute('type') === 'text' || event.target.getAttribute('type') === 'password' || event.target.tagName === 'TEXTAREA') { 
        
        event.target.style.backgroundColor = 'yellow';

    }
}, true);

// Change Color of text, password, textarea into white on blur
document.addEventListener('blur', function(event) {

    if (event.target.getAttribute('type') === 'text' || event.target.getAttribute('type') === 'password' || event.target.tagName === 'TEXTAREA') { 

        event.target.style.backgroundColor = 'white';

    }

}, true);