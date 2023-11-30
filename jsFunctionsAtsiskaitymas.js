"use strict"

// JS functions atsiskaitymas

// 1
    // Nesugalvojau kaip istraukti pasisveikinimo zodzius be return. Arba kaip padaryti, kad funkcija atspausdintu tuos zodzius ir tada paimti juos. //

function hello() {
    let pasisveikinimas = "Good afternoon"
    console.log(`${pasisveikinimas}`)
    return pasisveikinimas
}

function greeting(name, pasisveikinimas) {
    console.log(`${pasisveikinimas}, ${name}!`)
}

let myName = "Karolis"
let pasisveikinimasMan = greeting(myName, hello())

let friendName = "Arvydas"
let pasisveikinimasDraugui = greeting(friendName, hello.pasisveikinimas)

// 2

function whichNumberIsBigger(num1, num2) {
    let biggerNumber
    if (num1 > num2) {
        biggerNumber = "pirmasis skaicius didesnis"
    }
    else if (num2 > num1) {
        biggerNumber = "antrasis skaicius didesnis"
    }
    else {
        biggerNumber = num1 + num2
        console.log("skaiciai yra lygus")
    }
    return biggerNumber
}

let myNum1 = 5
let myNum2 = 5

let myBiggerNumber = whichNumberIsBigger(myNum1, myNum2)
console.log(myBiggerNumber)

// 3

function fizzAndBuzz(string) {
    if (string == "fizz") {
        console.log("buzz")
    }
    else if (string == "buzz") {
        console.log("fizz")
    }
    else {
        console.log("Please provide fizz or buzz")
    }
}

let myBuzz = fizzAndBuzz("buzz")
let myFizz = fizzAndBuzz("fizz")

// 4

function isTrianglePossible(x, y, myBiggerNumber) {
    if ((x + y > myBiggerNumber) && (x + myBiggerNumber > y) && (y + myBiggerNumber > x)) {
        return "Trikampis gali buti sudarytas"
    }
    else {
        return "Trikampis negali buti sudarytas"
    }
}

console.log(isTrianglePossible(4, 5, myBiggerNumber))


// 5

function calcSquareArea() {
    let side = parseInt(prompt("Enter the length of one side"))
    let area = side ** 2
    return area
}

function calcRectangleArea() {
    let sideA = parseInt(prompt("Enter the length of side A"))
    let sideB = parseInt(prompt("Enter the length of side B"))
    let area = sideA * sideB
    return area
}

function calcArea(figure) {
    if (figure == "square") {
        return calcSquareArea()
    }
    else if (figure == "rectangle") {
        return calcRectangleArea()
    }
}

let myFigure = prompt("Enter a name of geometrical figure (only square or rectangle)")

alert(calcArea(myFigure))


// 6

function isSeven(x) {
    return x == "7" ? true : false
}

let x = 7
console.log(isSeven(x))

// 7

const isEqual = (a, b) => a === b

console.log(isEqual(1, 1))

// 8

const isPayWorthPrize = (prob, prize, pay) => prob * prize > pay

let prob1 = 0.5
let prize1 = 21
let pay1 = 10
let worthPlaying1 = isPayWorthPrize(prob1, prize1, pay1)

console.log(worthPlaying1)

// 9

const convertToSeconds = (minutes) => minutes * 60

let myMins = 10
let myMinsInSecs = convertToSeconds(myMins)
console.log(`${myMins} min. = ${myMinsInSecs} s.`)

// 10

function calculate() {
    let num1 = parseInt(prompt("Enter a whole number"))
    let operator = prompt("Enter an arithmetic operator ( +, -, * or / )")
    let num2 = parseInt(prompt("Enter a second whole number"))
    let answer
    if (operator == "+"){
        answer = num1 + num2
    }
    else if (operator == "-"){
        answer = num1 - num2
    }
    else if (operator == "*"){
        answer = num1 * num2
    }
    else if (operator == "/"){
        answer = num1 / num2
    }
    else {
        answer = "Error: this calculator doesn't understand what you want"
    }
    return alert(answer)
}

calculate()