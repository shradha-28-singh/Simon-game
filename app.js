let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function ()  
{
    if (!started) {
        console.log("Game is started");
        started = true;
        levelup();
     }
});

function userflash(btn)  
{
     btn.classList.add("userflash");
     setTimeout(function () {
        btn.classList.remove("userflash");
     }, 250);
}

function gameflash(btn) 
{
     btn.classList.add("flash");
     setTimeout(function () {
        btn.classList.remove("flash");
     }, 250);
}

function levelup()
 {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);

    gameseq.push(randcolor);
    console.log("Game Sequence:", gameseq);
    gameflash(randbtn);
}

function checkans()
 {
    let idx = userseq.length - 1;

    if (userseq[idx] === gameseq[idx]) 
        {
        if (userseq.length === gameseq.length) 
            {
            setTimeout(levelup, 1000);
         }
    } else {
        h2.innerHTML = `Game Over! <b>Score: ${level}</b><br>Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
         }, 150);
         reset();
    }
}

function btnpress()
 {
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans();
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns)
     {
     btn.addEventListener("click", btnpress);
}

function reset()
 {
     started = false;
     gameseq = [];
     userseq = [];
     level = 0;
}
