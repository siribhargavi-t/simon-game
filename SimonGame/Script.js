let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["pink","green","blue","orange"];
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("Game started!!");    
    started=true;

    levelup();
}
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList .remove("flash"); 
},250);
}
function userFlash(btn){
btn.classList.add("userFlash");
setTimeout(function(){
    btn.classList .remove("userFlash"); 
},250);
}
function levelup(){
    userSeq=[];
    level++;
h3.innerText=`Level ${level}`;

let RandIdx=Math.floor(Math.random()*3);
let RandColor=btns[RandIdx];
let RandBtn=document.querySelector(`.${RandColor}`);
// console.log(RandIdx);
// console.log(RandColor);
// console.log(RandBtn);
 gameFlash(RandBtn);
 gameSeq.push(RandColor);
 console.log("Game seq: "+gameSeq);
}
function checkAns(idx){
    // let idx=level-1;
    // console.log(`Current level: ${level}`)
    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000)
        }
    }
    else{
        h3.innerHTML=`Game Over!Your Score was <b>${level} </b>.Press any key to start the game!`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }
            ,150)
        reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
console.log("User Seq: "+userSeq);

checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",
        btnPress
    )
};
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}