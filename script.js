'use strict';

const nameInput = document.getElementById('name');

const ageNameInput = document.getElementById('age');

const bloodTypeInput = document.getElementById('bloodGroup');

const mobileInput = document.getElementById('mobileNo');

const emailInput = document.getElementById('email');

const genderInput = document.getElementById('gender');

const btnSubmit = document.getElementById('btn-submit');

const userForm = document.getElementById('user-register-form');

userForm.addEventListener('submit',function(event){
    event.preventDefault();

    const Name = nameInput.value;
    const Age = ageNameInput.value;
    const BloodGroup = bloodTypeInput.value;
    const Mobile = mobileInput.value;
    const Email = emailInput.value;
    const Gender = genderInput.value;

    if(!Name){
        nameInput.classList.add('error-1');
        const formControl = nameInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else if(Name.length<=5){
        alert("Your name is too short")
    }
    else{
        nameInput.classList.add('correct');
        const formControl = nameInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    if(!Age){
        ageNameInput.classList.add('error-1');
        const formControl = ageNameInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else if(Age <=18 || Age >=50){
        alert("Your not eligible to donate blood")
    }
    else{
        ageNameInput.classList.add('correct');
        const formControl = ageNameInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    if(!BloodGroup){
        bloodTypeInput.classList.add('error-1');
        const formControl = bloodTypeInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else{
        bloodTypeInput.classList.add('correct');
        const formControl = bloodTypeInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    if(!Mobile){
        mobileInput.classList.add('error-1');
        const formControl = mobileInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else if(Mobile.length >= 11 || Mobile.length <=9){
        alert("Check your mobile number");
    }
    else{
        mobileInput.classList.add('correct');
        const formControl = mobileInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    if(!Email){
        emailInput.classList.add('error-1');
        const formControl = emailInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else{
        emailInput.classList.add('correct');
        const formControl = emailInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
    if(!Gender){
        genderInput.classList.add('error-1');
        const formControl = genderInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.add('error');
    }
    else{
        genderInput.classList.add('correct');
        const formControl = genderInput.parentElement;
        const popupElement = formControl.querySelector('.popup');
        popupElement.classList.remove('error');
        popupElement.classList.remove('error-1');
    }
});