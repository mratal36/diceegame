var i = Math.random();
i = Math.floor(i*6)+1;

if(i==1){
    document.querySelector(".dice").lastElementChild.setAttribute("src","./images/dice1.png");
}

else if(i==2){
    document.querySelector(".dice").lastElementChild.setAttribute("src","./images/dice2.png");
}

else if(i==3){
    document.querySelector(".dice").lastElementChild.setAttribute("src","./images/dice3.png");
}

else if(i==4){
    document.querySelector(".dice").lastElementChild.setAttribute("src","./images/dice4.png");
}

else if(i==5){
    document.querySelector(".dice").lastElementChild.setAttribute("src","./images/dice5.png");
}

else{
    document.querySelector(".dice").lastElementChild.setAttribute("src","./images/dice6.png");
}


var a = Math.random();
a= Math.floor(a*6)+1;

if(a==1){
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src","./images/dice1.png");
}

else if(a==2){
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src","./images/dice2.png");
}

else if(a==3){
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src","./images/dice3.png");
}

else if(a==4){
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src","./images/dice4.png");
}

else if(a==5){
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src","./images/dice5.png");
}

else{ 
    document.querySelector(".container").lastElementChild.lastElementChild.setAttribute("src","./images/dice6.png");
}

if( i == a){
    document.querySelector(".container").firstElementChild.innerHTML="Draw";
}

else if( i > a){
    document.querySelector(".container").firstElementChild.innerHTML=" 🚩 Player1 wins";
}

else{
    document.querySelector(".container").firstElementChild.innerHTML=" Player2 wins 🚩";
}