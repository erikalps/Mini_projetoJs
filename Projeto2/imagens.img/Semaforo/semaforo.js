const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;


const trafficLight =( event ) =>{
   turnOn[event.target.id]();
}


const nextIndex = () => 
colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors [colorIndex];
    turnOn[color]();

    nextIndex();
}

const turnOn = {
    'red':        () => img.src = "img/vermelho.png",
    'yellow':     () => img.src = "img/amarelo.png",
    'green':      () => img.src = "img/verde.png",
    'automatic':  () => setInterval (changeColor, 1000)
}




buttons.addEventListener('click',trafficLight );