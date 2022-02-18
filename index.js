let myarray = []
let cardss = document.getElementById("cards")
let sum = 0
let result = document.getElementById("total")
let OK = true
let initial = true
let money = 100


function hardcheck(){
    if (money === 0 || money<0){
        document.getElementById("messagebar").textContent = "You're broke. Do you want to start over?"
        document.getElementById("start").style.visibility = "hidden"
        document.getElementById("one").style.visibility = "hidden"
        document.getElementById("restart").style.visibility = "hidden"
        document.getElementById("again").style.visibility = "visible"
        OK = false
        initial = false

    }
}

function checkerp(){
    if (sum === 21){
        document.getElementById("messagebar").textContent = "Blackjack! You won."
        OK = false
        document.getElementById("start").style.visibility = "hidden"
        document.getElementById("one").style.visibility = "hidden"
        document.getElementById("restart").style.visibility = "visible"}
        
    if (sum > 21){
        document.getElementById("messagebar").textContent = "You lost!"
        OK = false
        document.getElementById("start").style.visibility = "hidden"
        document.getElementById("one").style.visibility = "hidden"
        document.getElementById("restart").style.visibility = "visible"
    }    

}
function play() {
    if (initial === true && OK === true){
    hardcheck();
    checkerp();
    alive = true
    sum = 0
    cardss.textContent = "Your cards: "
    result.textContent = "Total: "
    document.getElementById("start").textContent = "Gamble"
    let number = Math.random()
    let first = Math.floor((number*13)+1)
    number = Math.random()
    let second = Math.floor((number*13)+1)
    sum = sum + first + second
    result.textContent = "Total: " + sum
    cardss.textContent = cardss.textContent + first + " " + second + " "
    myarray.push(first)
    myarray.push(second)
    document.getElementById("messagebar").textContent = "You got " + first + " and " + second + " in the first turn" 
    initial = false
    checkerp();
    hardcheck();}
    checkerp();
    hardcheck();
}

function pick() {
    hardcheck();
    checkerp();
    if(initial === false && OK === true && alive === true){
    let onecard = Math.floor(((Math.random())*13)+1)
    myarray.push(onecard)
    sum = sum + onecard
    result.textContent = "Total: " + sum
    cardss.textContent = cardss.textContent + onecard + " "
    document.getElementById("messagebar").textContent = "You got " + onecard + " this turn"} 
checkerp();
hardcheck();
}

function restart(){
    hardcheck();
    if(sum === 21){money = money*6
    document.getElementById("money").textContent = "Money: $" + money}
    if(sum > 21){money = money - sum
        document.getElementById("money").textContent = "Money: $" + money}

    sum = 0
    document.getElementById("messagebar").textContent = "Hello there"
    result.textContent = "Total: "
    cardss.textContent = "Your cards: "
    OK = true
    initial = true
    document.getElementById("start").style.visibility = "visible"
    document.getElementById("one").style.visibility = "visible"
    document.getElementById("restart").style.visibility = "hidden"
    hardcheck();
}

function hardreset(){
    document.getElementById("messagebar").textContent = "Hello there"
    document.getElementById("start").style.visibility = "visible"
    document.getElementById("one").style.visibility = "visible"
    document.getElementById("restart").style.visibility = "hidden"
    document.getElementById("again").style.visibility = "hidden"
    OK = true
    initial = true
    document.getElementById("money").textContent = "Money: $100"
    money = 100
}