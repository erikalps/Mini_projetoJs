const tur = document.getElementById( 'tur' );
const lamp = document.getElementById( 'lamp' );

function lampOn(){
   if(!Broken()){
    lamp.src="imagens.img/ligada.jpg";
   }
}

function lampOf(){
    if(!Broken ()){
        lamp.src ="imagens.img/desligada.jpg";
    }
    
}

function lampBroken(){
    if(!Broken()){
        lamp.src ="imagens.img/quebrada.jpg";
        tur.textContent = 'Concertar'
    }
   
}


function Broken(){
    return lamp.src.indexOf('quebrada') >- 1
}

function TurOnOff (){
    if(tur.textContent === 'Ligar'){
        lampOn();
        tur.textContent = 'Desligar';
    } else if(tur.textContent =='Desligar') {
        lampOf();
        tur.textContent = 'Ligar';
    } else {
        lamp.src ="imagens.img/desligada.jpg";
        tur.textContent = 'Ligar';
    }
    
}

tur.addEventListener('click',TurOnOff);
lamp.addEventListener('dblclick' ,lampBroken);