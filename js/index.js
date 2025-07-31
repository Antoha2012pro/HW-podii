// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

// const inputRedEl = document.querySelector('input[value="red"]');
// const inputWhiteEl = document.querySelector('input[value="white"]');
// const inputGreenEl = document.querySelector('input[value="green"]');

// console.log(inputRedEl);
// console.log(inputWhiteEl);
// console.log(inputGreenEl);

// inputRedEl.addEventListener('change', onInput);
// inputWhiteEl.addEventListener('change', onInput);
// inputGreenEl.addEventListener('change', onInput);

// function onInput(event) {
//     console.log(event.target.value);
//     document.body.style.backgroundColor = event.target.value;
// }

// document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value; // Цю стрічку я зробив з чатом гпт, бо я не знаю як достукатися до checked


const inputRadioEls = document.querySelectorAll('[name="color"]');  
const inputCheck = document.querySelector('[name="color"]');
console.log(inputRadioEls);

inputRadioEls.forEach(input => {
    console.log(input);

    input.addEventListener('change', onRadioClick);
})

function onRadioClick(event) {
    const color = event.target.value;
    document.body.style.backgroundColor = color;
}

if (inputCheck) {
    document.body.style.backgroundColor = inputCheck.value;
}



// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

// const inputEl = document.querySelector("#name-input");
// const spanEl = document.querySelector("#name-output");

// inputEl.addEventListener("input", onInputChange);

// function onInputChange(event) {
//     console.log(event.target.value);

//     spanEl.textContent = event.target.value;
// }

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanRef.textContent = event.target.value
}




// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

// - Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// - Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.

// Для додавання стилів, використовуй CSS-класи valid і invalid.

// const inputValidationEl = document.querySelector("#validation-input");

// inputValidationEl.addEventListener('blur', onInputValidation);

// function onInputValidation(event) {


//     if (event.target.value.length === Number(event.target.dataset.length)) {
//         event.target.classList.add("valid");
//     } else {
//         event.target.classList.add("invalid");
//     }
// }

const validationInp = document.querySelector('#validation-input');

validationInp.addEventListener('blur', onInpBlur)

function onInpBlur(event) {
    console.log(event.target);
    
    const requiredValue = Number(event.target.dataset.length);

    const currentValue = event.target.value.length;

    validationInp.classList.remove('valid', 'invalid');

    if (currentValue === requiredValue) {
        validationInp.classList.add('valid');
    } else {
        validationInp.classList.add('invalid');
    }
}



// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// console.log(range);
// console.log(text);


rangeEl.addEventListener('input', onFontSize);

function onFontSize(event) {
    const size = event.target.value + "px";

    console.log(size);

    textEl.style.fontSize = size
}




const imageRef = document.querySelector(".image");

imageRef.addEventListener('click', onImageClick);

function onImageClick(event) {
    event.target.src = "https://pibig.info/uploads/posts/2022-06/thumbs/1655670913_2-pibig-info-p-leto-prishlo-kartinki-krasivo-2.jpg";

    event.target.width = 500;

    event.target.alt = "Фотоапарат"

}