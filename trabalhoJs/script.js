// Task Média
let nome = prompt("Digite aqui seu nome ")
let notaAV1 = parseInt(prompt("Digite aqui a sua Nota de AV1 "))
let notaAV2 = parseInt(prompt("Digite aqui a sua Nota de AV2 "))
let frequencia = parseInt(prompt("Digite aqui a sua Frequencia(0-100%) "))
let mediaAV12 = (notaAV1 + notaAV2)/2
    
    if (mediaAV12 >= 4 && frequencia >= 75) {
        let notaAV3 = parseInt(prompt("Digite aqui a sua nota de AV3 "));
        let mediaAV123 = (mediaAV12 + notaAV3) / 2
            if(mediaAV123 > 5){
                console.log(`Parabéns ${nome}, você foi Aprovado com média ${mediaAV123}!!`);
            }
            else{
                console.log(`Reprovado na Média Final`);
            }
}   else {
        if (mediaAV12 < 4) {
        console.log("Reprovado na média das AV1 e AV2");
    }
    
        if (frequencia < 75) {
        console.log("Reprovado por falta");
    }
}
// Task Carro
let nome = prompt("Digite o nome do motorista: ");
let limiteVia = parseFloat(prompt("Velocidade máxima permitida (km/h): "));
let velocidadeVeiculo = parseFloat(prompt("Velocidade registrada (km/h): "));

let excesso = (velocidadeVeiculo) - (limiteVia);

if(excesso <= 0){
    console.log(Motorista ${nome} dentro do limite de velocidade.)
}else{
    let tipoMulta = "";
    let valorMulta = 0;

    if(excesso <= 10){
        tipoMulta = "Leve";
        valorMulta = 50;
    }else if(excesso <= 20){
        tipoMulta = "Média";
        valorMulta = 100;
    }else{
        tipoMulta = "Grave";
        valorMulta = 200;
    }
    //Saída
    console.log("RELATÓRIO DE MULTA");
    console.log(Motorista: ${nome});
    console.log(Limite da via: ${limiteVia} km/h);
    console.log(Velocidade registrada: ${velocidadeVeiculo} km/h);
    console.log(Tipo de multa: ${tipoMulta});
    console.log(Valor da penalidade: R$${valorMulta.toFixed(2)});
}
// Task Aposentadoria
let idade = parseInt(prompt("Digite sua idade"))
let contribuicao = parseInt(prompt("Digite o seu tempo de contribuição"))

if(idade >= 65 ){
        console.log("Você ja pode se aposentar!")
    }else{
         if(contribuicao >= 30 && idade >= 60 )
            console.log("Você pode se aposentar pelo seu tempo de contribuição!")
    }