const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById
    ('resultado');

    const valorIMC = (peso/(altura*altura)).toFixed(1);
    let classificacao = "";

    if (valorIMC < 18.5){
        classificacao = "abaixo do peso";
    }else if(valorIMC < 25){
        classificacao = "peso ideal";
    }else if (valorIMC < 30){
        classificacao = "levemente acima do peso"
    }else{
        classificacao = "Obesidade"
    }
    resultado.textContent = `${nome} seu imc é ${valorIMC} sua classificação é ${classificacao}!`;
}
   
calcular.addEventListener('click',imc);
