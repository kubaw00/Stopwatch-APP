// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const div = document.querySelector('div.time div');
let flag = true;
let hundredthsOfSec = 0;
let idI;

function startCount(){
    if(flag){
    flag=!flag;
    btnStart.textContent = "Pause";
    idI = setInterval(timeHundred, 10)
    } else {
    btnStart.textContent = "Start";
    flag=!flag;
    clearInterval(idI);
    }
}

btnReset.addEventListener('click',function(){
    clearInterval(idI);
    hundredthsOfSec = 0;
    div.textContent = "---";
    btnStart.textContent = "Start";
    flag= true; 
    
})

function timeHundred(){ 
    hundredthsOfSec++;
    div.textContent = (hundredthsOfSec/100).toFixed(2);
}

btnStart.addEventListener('click', startCount)