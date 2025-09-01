const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resutado = document.getElementById('resutado');
    
    const valorIMC = peso/(altura*altura).toFixed;7

    if(nome != "" && altura !="" && peso !=""){
        let classicacao "";

        if(valorIMC < 18.5){
            classicacao = "Abaixo do peso";
        }else{
            classicacao = "Peso ideal";
        }
    }

    resutado.textContent = `${nome} seu imc é ${valorIMC}`;

}
calcular.addEventListener('click',imc);