// Get the values from Html

const resultEl = document.getElementById("result")

const copyEl = document.getElementById("copy")

const generateEl = document.getElementById("generate")

const LengthEl = document.getElementById("length")

const showLength = document.getElementById("range-value")

const IncludeNumber = document.getElementById("numbers")

const IncludeSymbols = document.getElementById("symbols")

const BoxEl   = document.querySelector(".box")

const bodyEl = document.getElementById("body-el")

const toggleBtn = document.getElementById("toggled")

const paraCopy = document.getElementById("copy-el")

// Make Toggle Feature

toggleBtn.addEventListener("click", () =>{
    toggleBtn.classList.toggle("change")
    BoxEl.classList.toggle("change")
    generateEl.classList.toggle("change")
    copyEl.classList.toggle("change")
    resultEl.classList.toggle("change")
})

// Copy the results


let copied = null

copyEl.addEventListener("click", () =>{
    copied = resultEl.value
    paraCopy.textContent = "Copied"
    console.log("thing")


})



LengthEl.addEventListener("change", (e)=>{
    showLength.textContent = e.target.value
})

function lowerRandom(){
    
    return String.fromCharCode((Math.floor(Math.random()*26)) + 97)
    
}

function numberRandom(){
    return String.fromCharCode((Math.floor(Math.random()*10)) + 48)
}

function symbolRandom(){
    const Symbols = "!@#$%^&*(){}[]=<>/,."
    return Symbols[Math.floor(Math.random()*Symbols.length)]
}

generateEl.addEventListener("click", () => {
    const length = LengthEl.value
    const isNumer = IncludeNumber.checked
    const isSymbol = IncludeSymbols.checked

    resultEl.value = generate(length, isNumer, isSymbol)
})

function generate(length, number, symbol){
    let generatedPass = ""
    let variationsCount = 1
    if(number){
        variationsCount += 1
    }
    if(symbol){
        variationsCount += 1
    }
    for(let i =0; i <= length; i += variationsCount){
        if(symbol){
            generatedPass += symbolRandom()
        }
        if(number){
            generatedPass += numberRandom()
        }
        
        generatedPass += lowerRandom()
    }

    const finalPassword = generatedPass.slice(0, length)

    return finalPassword

}