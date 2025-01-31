
const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome.value !== '' && altura !== '' && peso !== ''){
        
        const valorImc = (peso /(altura * altura)).toFixed(1);
        
        let classificacao = '';

        if(valorImc < 18.5){
            classificacao = 'Abaixo do peso!!!';
        } else if(valorImc < 25) {
            classificacao = 'Com o peso Ideal';
        } else if(classificacao < 30){
            classificacao =' Levemente acima do peso.';
        } else if(classificacao < 35){
            classificacao =' Com obesidade grau 1.';
        } else if(classificacao < 40){
            classificacao='Com obesidade grau 2.';
        } else {
            classificacao ='Com obesidade grau 3. !!cuidado!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'PREENCHA TODOS OS CAMPOS!!!';
    }
}

calcular.addEventListener('click', imc);

