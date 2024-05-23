let body = document.body;
body.style.height = "100vh";
body.style.width = "100vw";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.paddingTop = "130px";
body.style.margin = "0";
body.style.position = "relative";

const container = document.querySelector(".container");
container.style.height = "100%";
container.style.minWidth = "50%";
container.style.backgroundColor = "red";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.gap = "20px";

for (let i = 1; i <= 3; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "game-div");
    container.appendChild(div);
}

const gameDiv = document.querySelectorAll(".game-div");
for (let i = 0; i < gameDiv.length; i++) {
    gameDiv[i].style.display = "flex";
    gameDiv[i].style.flexDirection = "column";
    gameDiv[i].style.gap = "20px";

    for (let j = 0; j < 3; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "game-box");
        gameDiv[i].appendChild(div);
    }
}

const gamebox = document.querySelectorAll(".game-box");
for (let i = 0; i < gamebox.length; i++) {
    gamebox[i].setAttribute("id", i);
    gamebox[i].style.minHeight = "150px";
    gamebox[i].style.minWidth = "150px";
    gamebox[i].style.borderRadius = "50%";
    gamebox[i].style.backgroundColor = "black";
    gamebox[i].style.transform = "rotateX(70deg)";
    gamebox[i].style.position = "relative";
    gamebox[i].style.cursor = "pointer";
}

let mole = document.createElement("div");
mole.style.height = "200px";
mole.style.minWidth = "120px";
mole.style.position = "absolute";
mole.style.top = "-80px";
mole.style.left = "20px";
mole.style.zIndex = 1000;

let moleImage = document.createElement("img");
moleImage.style.height = "100%";
moleImage.style.width = "80%";
moleImage.style.borderRadius = "50px 50px 0px 0px";
moleImage.src = "image/mole.png";
mole.appendChild(moleImage);

let score = document.createElement("h1");
score.textContent = "Score: 0";
score.style.position = "absolute";
score.style.top = "0px";
score.style.left = "0px";
score.style.margin = "0";
body.appendChild(score);

let scoreValue = 0;

let currentMolePosition = -1;

setInterval(function () {
    let randomPos = Math.floor(Math.random() * 9);
    let randomDiv = document.getElementById(`${randomPos}`);
    if (randomDiv) {
        randomDiv.appendChild(mole);
        currentMolePosition = randomPos;
    }
}, 600);

for (let i = 0; i < gamebox.length; i++) {
    gamebox[i].addEventListener('click', (event) => {
        if (i === currentMolePosition) {
            scoreValue += 10;
        } else {
            scoreValue -= 5;
        }
        score.textContent = `Score: ${scoreValue}`;
    });
}