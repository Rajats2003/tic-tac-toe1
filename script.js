let btn1=document.querySelectorAll(".btn");
let rebtn=document.querySelector(".rebtn");
let win1=document.querySelector(".win");
let mas1=document.querySelector(".msg-cont");


let turn0=true;
let count = 0;


const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
];
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    mas1.classList.add("hide");
  };
  
  

btn1.forEach((btn) => {
    btn.addEventListener ("click" ,()=>{
        if (turn0) {
            //playerO
            btn.innerText = "O";
            turn0 = false;
          } else {
            //playerX
            btn.innerText = "X";
            turn0 = true;
          }
          btn. disabled=true;

          cheakwinner();
    })
    
});

const gameDraw = () => {
    win1.innerText = `Game was a Draw.`;
    mas1.classList.remove("hide");
    disableBoxes();
  };
  
  const disableBoxes = () => {
    for (let btn of btn1) {
      btn.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let btn of btn1) {
      btn.disabled = false;
      btn.innerText = "";
    }
  };

const showWinner = (winner) => {
    win1.innerText = `Congratulations, Winner is ${winner}`;
    mas1.classList.remove("hide");
    disableBoxes();
  };

  const cheakwinner = () => {
    for (let pattern of winpattern) {
        let post1 = btn1[pattern[0]].innerText;
        let post2 = btn1[pattern[1]].innerText;
        let post3 = btn1[pattern[2]].innerText;

        if (post1 != "" && post2 != "" && post3 != "") {
            if (post1 == post2 && post2 == post3) {
                console.log("Winner", post1);
                showWinner(post1);
            }
        }
    }
};
rebtn.addEventListener("click", resetGame);
rebtn.addEventListener("click", resetGame);






