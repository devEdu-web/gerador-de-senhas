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


function onlyLowercaseSelected() {
    generatedPassword = ''

    for(let i = 0; i < passwordLength; i++) {
        let shuffleNumber = Math.ceil(Math.random() * alphabet.length - 1)
        generatedPassword += alphabet[shuffleNumber]    
        // console.log(shuffleNumber)
    }
    
    showPassword.innerHTML = generatedPassword
    
    // console.log(shuffleNumber)

}


function onlyUppercaseSelected() {
    generatedPassword = ''

    for(let i = 0; i < passwordLength; i++) {
        let shuffleNumber = Math.ceil(Math.random() * alphabet.length - 1)
        generatedPassword += alphabetCapsLock[shuffleNumber]    
        // console.log(shuffleNumber)
    }
    
    showPassword.innerHTML = generatedPassword
}

function onlyNumberSelected() {
    generatedPassword = ''

    for(let i = 0; i < passwordLength; i++) {
        let shuffleNumber = Math.ceil(Math.random() * number.length - 1)
        generatedPassword += number[shuffleNumber]    
        // console.log(shuffleNumber)
    }
    
    showPassword.innerHTML = generatedPassword
}

function onlySymbolSelected() {
    generatedPassword = ''

    for(let i = 0; i < passwordLength; i++) {
        let shuffleNumber = Math.ceil(Math.random() * specialCaracteres.length - 1)
        generatedPassword += specialCaracteres[shuffleNumber]    
        // console.log(shuffleNumber)
    }
    
    showPassword.innerHTML = generatedPassword
}



function lowerCaseAndUpperCase() {
    generatedPassword = ''
    let lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))  // Sempre irá gerar 2 números (0 e 1)



    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))

        let shuffleNumber = Math.ceil(Math.random() * alphabet.length - 1)
        let shuffleNumberCaps = Math.ceil(Math.random() * alphabet.length - 1)

        if(lettersToUpperCase == 0) {
            generatedPassword += alphabet[shuffleNumber]
        } else {
            generatedPassword += alphabetCapsLock[shuffleNumberCaps]
        }

    }
    

    // }   

    showPassword.innerHTML = generatedPassword
    
}

// lowerCaseAndUpperCase()


function lowerCaseAndNumber() {
    generatedPassword = ''
    let lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))  // Sempre irá gerar 2 números (0 e 1)



    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))

        let shuffleNumberAlphabet = Math.ceil(Math.random() * alphabet.length - 1)
        let shuffleNumber = Math.ceil(Math.random() * number.length - 1)

        if(lettersToUpperCase == 0) {
            generatedPassword += alphabet[shuffleNumberAlphabet]
        } else {
            generatedPassword += number[shuffleNumber]
        }

    }
    
 

    showPassword.innerHTML = generatedPassword
}

// lowerCaseAndNumber()


function lowerCaseAndSymbols() {
    generatedPassword = ''
    let lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))  // Sempre irá gerar 2 números (0 e 1)



    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))

        let shuffleNumberAlphabet = Math.ceil(Math.random() * alphabet.length - 1)
        let shuffleSymbol = Math.ceil(Math.random() * specialCaracteres.length - 1)

        if(lettersToUpperCase == 0) {
            generatedPassword += alphabet[shuffleNumberAlphabet]
        } else {
            generatedPassword += specialCaracteres[shuffleSymbol]
        }


    }
    


    showPassword.innerHTML = generatedPassword
}



function upperCaseAndNumbers() {
    generatedPassword = ''
    let lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))  // Sempre irá gerar 2 números (0 e 1)



    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))

        let shuffleNumberAlphabet = Math.ceil(Math.random() * alphabetCapsLock.length - 1)
        let shuffleSymbol = Math.ceil(Math.random() * number.length - 1)

        if(lettersToUpperCase == 0) {
            generatedPassword += alphabetCapsLock[shuffleNumberAlphabet]
        } else {
            generatedPassword += number[shuffleSymbol]
        }

    }
    


    showPassword.innerHTML = generatedPassword
}




function upperCaseAndSymbols() {
    generatedPassword = ''
    let lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))  // Sempre irá gerar 2 números (0 e 1)



    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))

        let shuffleNumberAlphabet = Math.ceil(Math.random() * alphabetCapsLock.length - 1)
        let shuffleSymbol = Math.ceil(Math.random() * specialCaracteres.length - 1)

        if(lettersToUpperCase == 0) {
            generatedPassword += alphabetCapsLock[shuffleNumberAlphabet]
        } else {
            generatedPassword += specialCaracteres[shuffleSymbol]
        }


    }
    

    // }   

    showPassword.innerHTML = generatedPassword
}




function numberAndSymbols() {
    generatedPassword = ''
    let lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))  // Sempre irá gerar 2 números (0 e 1)



    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 2)))

        let shuffleNumberAlphabet = Math.ceil(Math.random() * number.length - 1)
        let shuffleSymbol = Math.ceil(Math.random() * specialCaracteres.length - 1)

        if(lettersToUpperCase == 0) {
            generatedPassword += number[shuffleNumberAlphabet]
        } else {
            generatedPassword += specialCaracteres[shuffleSymbol]
        }

    }
    
 

    showPassword.innerHTML = generatedPassword
}



function lowerCaseAndUpperCaseAndNumber() {
    generatedPassword = ''
    let lettersToUpperCase = Math.ceil(Math.random() * (passwordLength - (passwordLength - 3)))  // Sempre irá gerar 3 números (0, 1 e 2)



    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 3)))

        let shuffleNumberAlphabet = Math.ceil(Math.random() * alphabet.length - 1)
        let shuffleNumberCaps = Math.ceil(Math.random() * alphabet.length - 1)
        let shuffleNumber = Math.ceil(Math.random() * number.length - 1)


        if(lettersToUpperCase == 0) {
            generatedPassword += alphabet[shuffleNumberAlphabet]
        } else if (lettersToUpperCase == 1) {
            generatedPassword += alphabetCapsLock[shuffleNumberCaps]
        } else {
            generatedPassword += number[shuffleNumber]
        }


    }
      

    showPassword.innerHTML = generatedPassword
}


function loweCaseAndUpperCaseAndSymbols() {
    generatedPassword = ''
    let lettersToUpperCase = Math.ceil(Math.random() * (passwordLength - (passwordLength - 3)))  // Sempre irá gerar 3 números (0, 1 e 2)



    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 3)))

        let shuffleNumberAlphabet = Math.ceil(Math.random() * alphabet.length - 1)
        let shuffleNumberCaps = Math.ceil(Math.random() * alphabet.length - 1)
        let shuffleSymbol = Math.ceil(Math.random() * specialCaracteres.length - 1)


        if(lettersToUpperCase == 0) {
            generatedPassword += alphabet[shuffleNumberAlphabet]
        } else if (lettersToUpperCase == 1) {
            generatedPassword += alphabetCapsLock[shuffleNumberCaps]
        } else {
            generatedPassword += specialCaracteres[shuffleSymbol]
        }

    }
    


    showPassword.innerHTML = generatedPassword
}


function upperCaseAndNumbersAndSymbols() {
    generatedPassword = ''
    let lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 3)))  // Sempre irá gerar 2 números (0 e 1)



    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 3)))

        let shuffleNumberAlphabet = Math.ceil(Math.random() * alphabetCapsLock.length - 1)
        let shuffleSymbol = Math.ceil(Math.random() * specialCaracteres.length - 1)
        let shuffleNumber = Math.ceil(Math.random() * number.length - 1)

        if(lettersToUpperCase == 0) {
            generatedPassword += alphabetCapsLock[shuffleNumberAlphabet]
        } else if (lettersToUpperCase == 1){
            generatedPassword += number[shuffleNumber]
        } else{
            generatedPassword += specialCaracteres[shuffleSymbol]
        }

    }
     

    showPassword.innerHTML = generatedPassword
}

// upperCaseAndNumbersAndSymbols()

function lowerCaseAndNumberAndSymbols() {
    generatedPassword = ''
    let lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 3)))  // Sempre irá gerar 2 números (0 e 1)


    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 3)))

        let shuffleNumberAlphabet = Math.ceil(Math.random() * alphabet.length - 1)
        let shuffleNumber = Math.ceil(Math.random() * number.length - 1)
        let shuffleSymbol = Math.ceil(Math.random() * specialCaracteres.length - 1)

        if(lettersToUpperCase == 0) {
            generatedPassword += alphabet[shuffleNumberAlphabet]
        } else if (lettersToUpperCase == 1){
            generatedPassword += number[shuffleNumber]
        } else {
            generatedPassword += specialCaracteres[shuffleSymbol]
        }

    }
 
    showPassword.innerHTML = generatedPassword
}

function allSelected() {
    generatedPassword = ''
    let lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 4)))  // Sempre irá gerar 2 números (0 e 1)


    for(let i = 0; i < passwordLength; i++) {
        lettersToUpperCase = Math.floor(Math.random() * (passwordLength - (passwordLength - 4)))

        let shuffleNumberAlphabet = Math.ceil(Math.random() * alphabet.length - 1)
        let shuffleUpperCase = Math.ceil(Math.random() * alphabet.length - 1)
        let shuffleNumber = Math.ceil(Math.random() * number.length - 1)
        let shuffleSymbol = Math.ceil(Math.random() * specialCaracteres.length - 1)

        if(lettersToUpperCase == 0) {
            generatedPassword += alphabet[shuffleNumberAlphabet]
        } else if (lettersToUpperCase == 1){
            generatedPassword += number[shuffleNumber]
        } else if(lettersToUpperCase == 2) {
            generatedPassword += alphabetCapsLock[shuffleUpperCase]
        }
          else {
            generatedPassword += specialCaracteres[shuffleSymbol]
        }

    }
 
    showPassword.innerHTML = generatedPassword
}



function generate() {
    let lowerCase = document.getElementById('lowerCase').checked
    let upperCase = document.getElementById('upperCase').checked
    let numbers = document.getElementById('numbers').checked
    let symbols = document.getElementById('symbols').checked

    passwordLength = rangeInputValue.value


    if(lowerCase == true && upperCase == false && numbers == false && symbols == false) {
        onlyLowercaseSelected()
    }
    else if(lowerCase == false && upperCase == true && numbers == false && symbols == false) {
        onlyUppercaseSelected()
    }
    else if(lowerCase == false && upperCase == false && numbers == true && symbols == false) {
        onlyNumberSelected()
    }
    else if(lowerCase == false && upperCase == false && numbers == false && symbols == true) {
        onlySymbolSelected()
    }
    else if(lowerCase == true && upperCase == true && numbers == false && symbols == false) {
        lowerCaseAndUpperCase()
    }
    else if (lowerCase == true && upperCase == false && numbers == true && symbols == false) {
        lowerCaseAndNumber()
    }
    else if(lowerCase == true && upperCase == false && numbers == false && symbols == true) {
        lowerCaseAndSymbols()
    }
    else if(lowerCase == false && upperCase == false && numbers == true && symbols == true) {
        numberAndSymbols()
    }
    else if(lowerCase == false && upperCase == true && numbers == true && symbols == false) {
        upperCaseAndNumbers()
    }
    else if(lowerCase == false && upperCase == true && numbers == false && symbols == true) {
        upperCaseAndSymbols()
    }
    // else if (lowerCase == true && upperCase == false && numbers == false && symbols == true) {
    //     lowerCaseAndSymbols()
    // }
    else if(lowerCase == true && upperCase == true && numbers == true && symbols == false) {
        lowerCaseAndUpperCaseAndNumber()
    }
    else if (lowerCase == true && upperCase == true && numbers == false && symbols == true) {
        loweCaseAndUpperCaseAndSymbols()
    }
    else if (lowerCase == false && upperCase == true && numbers == true && symbols == true) {
        upperCaseAndNumbersAndSymbols()
    }
    else if (lowerCase == true && upperCase == false && numbers == true && symbols == true) {
        lowerCaseAndNumberAndSymbols()
    } else {
        allSelected()
    }
}