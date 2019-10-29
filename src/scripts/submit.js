const myForm = document.querySelector('#myForm'),
    sendButton = document.querySelector('#sendButton'),
    modulWindow = document.querySelector('.section-good');


sendButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (validateForm(myForm)) {

        
        let formData = new FormData(myForm);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formData);
        xhr.addEventListener('load', () => {
            console.log(formData);
        });
        xhr.addEventListener('load', function () {

            if (xhr.status === 200) {

                console.log('good');
            } else {
                console.log('bad');
            }
        })
    }
})



function validateForm(form) {
    let valid = true

    if (!validateField(form.elements.name)) {
        valid = false
        
    }
    if (!validateField(form.elements.email)) {
        valid = false
    }
    if (!validateField(form.elements.comment)) {
        valid = false
    }
    return valid
};

function validateField(field) {
    if (!field.checkValidity()) {
        console.log(field);
        field.setAttribute('placeholder', field.validationMessage);


        return false;
    } else {
        field.elements = '';
        return true;
    }
};