let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player X ,PlayerY
let count = 0; //To Track Draw

const winPatterns = [  
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");

};


boxes.forEach((box) => {
     box.addEventListener("click", () => {
        // console.log(o);
       if (turnO) {  //player o
        box.innerText ="O";
        turnO = false;
       } else {  //player x
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;
       count++;

       let isWinner = checkWinner();

if (count === 9 && !isWinner) {
  gameDraw();
}

    });
});


const gameDraw = () => {
msg.innerText = `Game was a Draw.`;
msgcontainer.classList.remove("hide");
disableBoxes();
};



const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations,winner is ${Winner};`
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
        for (let pattern of winPatterns) {

            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val !="" && pos2val !="" && pos3val !="") {
                if(pos1val === pos2val && pos2val === pos3val){
                  
                    showWinner(pos1val);
                }
            }
    }
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
// resetGame.addEventListener(resetGame)


















































