const values = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
const btn = document.querySelector("btn");
const backgroundHex = document.getElementById("background-color");
const randomNumber = Math.floor(Math.random()*values.length);
const color = '';

btn.addEventListener('click', function(){
    for(i=0; i< 6; i++){
        color += values[randomNumber];
    }

    backgroundHex.style.background = color;

    
})