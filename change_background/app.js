const images = ["url(images/boat.jpg)", "url(images/camels.jpg)", "url(images/cherry-blossom.jpg)", "url(images/desert.jpg)", "url(images/elephants.jpg)","url(images/ocean.jpg)", "url(images/snowy-mountain.jpg)", "url(images/sunrise.jpg)"];
const backgroundStyle = document.getElementById("background");
const btn = document.querySelector(".btn")

btn.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random()*8)

    backgroundStyle.style.backgroundImage = images[randomNumber];

    console.log(randomNumber)
   
    
});