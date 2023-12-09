// let body = document.querySelector("body");
let h4 = document.querySelector("h4");
let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "orange", "green"];

let started = false;
let level = 0;



document.addEventListener("keypress", function() {
    if(started == false){
    console.log("game started");
    started = true;
    }
    levelUp();

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}


function levelUp() {
    userSeq = [];
    level++;
    h4.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); 
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    // console.log(gameSeq);

    gameFlash(randBtn);
}



function checkAns(idx) {
    // console.log("current level :", level);
    // let idx = level - 1;

    if(userSeq[idx] == gameSeq[idx]) {
       if(userSeq.length == gameSeq.length) {
        setTimeout(levelUp,1000);
       }
    } else {
        h4.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}


function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
