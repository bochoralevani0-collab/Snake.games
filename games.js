
// open game system
function openGame(game){
    let box = document.getElementById("gameBox");

    if(game === "rps"){
        box.innerHTML = `
        <h2>✊ Rock Paper Scissors</h2>
        <button onclick="rps('rock')">Rock</button>
        <button onclick="rps('paper')">Paper</button>
        <button onclick="rps('scissors')">Scissors</button>
        <p id="res"></p>`;
    }

    if(game === "clicker"){
        box.innerHTML = `
        <h2>🖱️ Clicker Game</h2>
        <button onclick="add()">CLICK</button>
        <p id="score">0</p>`;
    }

    if(game === "guess"){
        box.innerHTML = `
        <h2>🎯 Guess Game</h2>
        <input id="num">
        <button onclick="check()">Try</button>
        <p id="out"></p>`;
    }
}

// RPS
function rps(user){
    const arr = ["rock","paper","scissors"];
    const bot = arr[Math.floor(Math.random()*3)];

    let result = "";

    if(user === bot){
        result = "Draw";
    } else if(
        (user==="rock" && bot==="scissors") ||
        (user==="paper" && bot==="rock") ||
        (user==="scissors" && bot==="paper")
    ){
        result = "Win 🎉";
    } else {
        result = "Lose ❌";
    }

    document.getElementById("res").innerText =
    "Bot: " + bot + " | " + result;
}

// CLICKER
let score = 0;
function add(){
    score++;
    document.getElementById("score").innerText = score;
}

// GUESS
let secret = Math.floor(Math.random()*10)+1;

function check(){
    let val = document.getElementById("num").value;

    if(val == secret){
        document.getElementById("out").innerText = "Correct 🎉";
        secret = Math.floor(Math.random()*10)+1;
    } else {
        document.getElementById("out").innerText = "Wrong ❌";
    }
}