const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resutado = document.getElementById('resutado');
    
    const valorIMC = peso/(altura*altura).toFixed;

    resutado.textContent = `${nome} seu imc é ${valorIMC}`;

}
calcular.addEventListener('click',imc);