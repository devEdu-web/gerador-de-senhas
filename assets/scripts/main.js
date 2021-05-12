let caracteres = document.getElementById('caracteres-number')
let rangeInputValue = document.querySelectorAll('input')[0]
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let alphabetCapsLock = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
let specialCaracteres = ['!', '@', '$', '%', '&']
let generatedPassword = ''
let showPassword = document.getElementById('password-viewport')
let passwordLength = rangeInputValue.value


rangeInputValue.addEventListener('input', function(){
    caracteres.innerHTML = rangeInputValue.value
})


function oneCheckboxSelected(checkbox) {
    generatedPassword = '';

    for(let i = 0; i < passwordLength; i++) {
        let shuffleNumber = Math.ceil(Math.random() * checkbox.length - 1)
        generatedPassword += checkbox[shuffleNumber]
    }
    showPassword.innerHTML = generatedPassword
}



function twoCheckboxSelected(checkbox1, checkbox2) {
    generatedPassword = ''
    let differentCaracteres = Math.floor(Math.random() * (passwordLength - (passwordLength - 2))) 

    for(let i = 0; i < passwordLength; i++) {
        differentCaracteres = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))
        let shuffleNumberCheckbox1 = Math.ceil(Math.random() * checkbox1.length - 1)
        let shuffleNumberCheckbox2 = Math.ceil(Math.random() * checkbox2.length - 1)
    
        if(differentCaracteres == 0) {
            generatedPassword += checkbox1[shuffleNumberCheckbox1]
        } else{
            generatedPassword += checkbox2[shuffleNumberCheckbox2]
        }
    }
    showPassword.innerHTML = generatedPassword
}



function threeCheckboxSelected(checkbox1, checkbox2, checkbox3) {
    generatedPassword = ''
    let differentCaracteres = Math.floor(Math.random() * (passwordLength - (passwordLength - 3))) 

    for(let i = 0; i < passwordLength; i++) {
        differentCaracteres = Math.floor(Math.random() * (passwordLength - (passwordLength - 3))) 
        let shuffleNumberCheckbox1 = Math.ceil(Math.random() * checkbox1.length - 1)
        let shuffleNumberCheckbox2 = Math.ceil(Math.random() * checkbox2.length - 1)
        let shuffleNumberCheckbox3 = Math.ceil(Math.random() * checkbox3.length - 1)

        if(differentCaracteres == 0) {
            generatedPassword += checkbox1[shuffleNumberCheckbox1]
        } else if (differentCaracteres == 1) {
            generatedPassword += checkbox2[shuffleNumberCheckbox2]
        } else {
            generatedPassword += checkbox3[shuffleNumberCheckbox3]
        }
    }
    showPassword.innerHTML = generatedPassword
}


function allCheckboxSelected(checkbox1, checkbox2, checkbox3, checkbox4) {
    generatedPassword = ''
    let differentCaracteres = Math.floor(Math.random() * (passwordLength - (passwordLength - 4)))

    for(let i = 0; i < passwordLength; i++) {
        differentCaracteres = Math.floor(Math.random() * (passwordLength - (passwordLength - 4))) 
        let shuffleNumberCheckbox1 = Math.ceil(Math.random() * checkbox1.length - 1)
        let shuffleNumberCheckbox2 = Math.ceil(Math.random() * checkbox2.length - 1)
        let shuffleNumberCheckbox3 = Math.ceil(Math.random() * checkbox3.length - 1)
        let shuffleNumberCheckbox4 = Math.ceil(Math.random() * checkbox4.length - 1)

        if(differentCaracteres == 0) {
            generatedPassword += checkbox1[shuffleNumberCheckbox1]
        } else if (differentCaracteres == 1) {
            generatedPassword += checkbox2[shuffleNumberCheckbox2]
        } else if(differentCaracteres == 2) {
            generatedPassword += checkbox3[shuffleNumberCheckbox3]
        } else {
            generatedPassword += checkbox4[shuffleNumberCheckbox4]
        }
    }
    showPassword.innerHTML = generatedPassword
}


function generatePassword() {
    // generatePassword = ''
    let lowerCase = document.getElementById('lowerCase').checked
    let upperCase = document.getElementById('upperCase').checked
    let numbers = document.getElementById('numbers').checked
    let symbols = document.getElementById('symbols').checked

    passwordLength = rangeInputValue.value

    if(lowerCase == true && upperCase == false && numbers == false && symbols == false) {  // One checkbox
        oneCheckboxSelected(alphabet)
    }
    else if(lowerCase == false && upperCase == true && numbers == false && symbols == false) { // One checkbox
        oneCheckboxSelected(alphabetCapsLock)
    }
    else if(lowerCase == false && upperCase == false && numbers == true && symbols == false) { // One checkbox
        oneCheckboxSelected(number)
    }
    else if(lowerCase == false && upperCase == false && numbers == false && symbols == true) { // One checkbox
        oneCheckboxSelected(specialCaracteres)
    }
    else if(lowerCase == true && upperCase == true && numbers == false && symbols == false) { // Two checkbox's
        twoCheckboxSelected(alphabet, alphabetCapsLock)
    }
    else if (lowerCase == true && upperCase == false && numbers == true && symbols == false) { // Two checkbox's
        twoCheckboxSelected(alphabet, number)
    }
    else if(lowerCase == true && upperCase == false && numbers == false && symbols == true) { // Two checkbox's
        twoCheckboxSelected(alphabet, specialCaracteres)
    }
    else if(lowerCase == false && upperCase == false && numbers == true && symbols == true) { // Two checkbox's
        twoCheckboxSelected(number, specialCaracteres)
    }
    else if(lowerCase == false && upperCase == true && numbers == true && symbols == false) { // Two checkbox's
        twoCheckboxSelected(alphabetCapsLock, number)
    }
    else if(lowerCase == false && upperCase == true && numbers == false && symbols == true) { // Two checkbox's
        twoCheckboxSelected(alphabetCapsLock, specialCaracteres)
    }
    else if(lowerCase == true && upperCase == true && numbers == true && symbols == false) {  // Three checkbox's
        threeCheckboxSelected(alphabet, alphabetCapsLock, number)
    }
    else if (lowerCase == true && upperCase == true && numbers == false && symbols == true) { // Three checkbox's
        threeCheckboxSelected(alphabet, alphabetCapsLock, specialCaracteres)
    }
    else if (lowerCase == false && upperCase == true && numbers == true && symbols == true) { // Three checkbox's
        threeCheckboxSelected(alphabetCapsLock, number, specialCaracteres)
    }
    else if (lowerCase == true && upperCase == false && numbers == true && symbols == true) { // Three checkbox's
        threeCheckboxSelected(alphabet, number, specialCaracteres)
    } else if(lowerCase == true && upperCase == true && numbers == true && symbols == true) {
        allCheckboxSelected(alphabet, alphabetCapsLock, number, specialCaracteres)
    }
    else {
        alert('Você precisa marcar no mínimo uma opção!!')
    }
}