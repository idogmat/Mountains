// const myForm = document.querySelector('#myForm'),
//     sendButton = document.querySelector('#sendButton'),
//     modulWindow = document.querySelector('.good-order'),
//     orderBtn = document.querySelector('.good-order-btn');

// sendButton.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (validateForm(myForm)) {

//         let formData = new FormData(myForm);
//         formData.append('to', 'test@test.test');

//         const xhr = new XMLHttpRequest();
//         xhr.responseType = 'json';
//         xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
//         xhr.send(formData);
//         xhr.addEventListener('load', () => {

//             console.log(xhr.response);
//         });

//         xhr.addEventListener('load', function () {

//             modulWindow.style.display = 'flex';
//             if (xhr.status === 200) {

//                 document.querySelector('.good-order__active span').innerHTML = xhr.response.message;

//             } else {
//                 document.querySelector('.good-order__active span').innerHTML = ('Erorr - ' + xhr.status);
//             }

//             orderBtn.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 modulWindow.style.display = 'none';
//             })
//         })
//     }
// })



// function validateForm(form) {
//     let valid = true

//     if (!validateField(form.elements.name)) {
//         valid = false
//     }
//     if (!validateField(form.elements.phone)) {
//         valid = false
//     }
//     if (!validateField(form.elements.comment)) {
//         valid = false
//     }
//     return valid
// };

// function validateField(field) {
//     if (!field.checkValidity()) {
//         // console.log(field);
//         field.setAttribute('placeholder', field.validationMessage);
//         field.style.border = '1px solid #0f5a47';

//         return false;
//     } else {
//         field.elements = '';
//         field = field.style.border = 'none';
//         return true;
//     }
// }