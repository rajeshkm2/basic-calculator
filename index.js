
let firstInputEl = document.getElementById("firstInput")
let secondInputEl = document.getElementById("secondInput")


function add() {

    let inputOne = Number(firstInputEl.value)
    let inputTwo = Number(secondInputEl.value)


    let resultEl = inputOne + inputTwo
    document.getElementById("result").innerText = resultEl
   console.log(resultEl)
}

function subtract() {

    let inputOne = Number(firstInputEl.value)
    let inputTwo = Number(secondInputEl.value)


    let resultEl = inputOne - inputTwo
    document.getElementById("result").innerText = resultEl
   console.log(resultEl)
}

function multiply() {

    let inputOne = Number(firstInputEl.value)
    let inputTwo = Number(secondInputEl.value)


    let resultEl = inputOne * inputTwo
    document.getElementById("result").innerText = resultEl
   console.log(resultEl)
}

function divide() {

    let inputOne = Number(firstInputEl.value)
    let inputTwo = Number(secondInputEl.value)


    let resultEl = inputOne / inputTwo
    document.getElementById("result").innerText = resultEl
   console.log(resultEl)
}