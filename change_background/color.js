const values = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const btn = document.querySelector(".btn");
const backgroundHex = document.getElementById("background-color");



btn.addEventListener('click', function(){
    let color = '#';
    
    for(let i=1; i<=6; i++){
        color += values[getRandomNumber()];
        
    }

});

function getRandomNumber(){
let randomNumber = Math.floor(Math.random()*values.length);
return randomNumber;
}