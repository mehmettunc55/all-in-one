

let inputRandomNumber = Math.trunc(Math.random() * 100);
let theResult = document.getElementById("show-result");

const checkButton = document.getElementById('checkedButton');
checkButton.addEventListener('click', guessNumber);

function guessNumber(){
    let writtenNumber = Number(document.getElementById('numberBox').value);
    if (writtenNumber > 100){
        theResult.textContent = 'The number shoul de smaller than 100!!!'; 
    }else if (writtenNumber === inputRandomNumber ){
        theResult.textContent = 'Congrats!!!!';
    }else if (writtenNumber < inputRandomNumber ){
        theResult.textContent = 'Try Higher Number!!!!';
    }else if (writtenNumber > inputRandomNumber){
        theResult.textContent = 'Try Lower Number!!!!';
    }
    input.value = '';
}

let input = document.getElementById("numberBox");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("checkedButton").click();
   input.value = '';
  }
  
});



const tryNumber = document.getElementById("numberOfAttempt");
console.log(tryNumber.textContent);
let counter = 0;
checkButton.addEventListener("click", tryCounter);
function tryCounter(){
counter += 1;
tryNumber.textContent = counter;
}
