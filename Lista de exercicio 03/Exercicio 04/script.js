function valor(){
    var cotacao = parseFloat(prompt("Digite o valor da cotação do dolar: "));
    var dolar = parseFloat(prompt("Digite a quantidade de dolares que você possui: "));

    var real = cotacao * dolar;
    alert("Você possui R$ " + real );
}