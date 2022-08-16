let pergunta = prompt("Você deseja comer mais coxinha? \n S: sim \n N: não").toUpperCase()
let conta = 2.50

while(pergunta === "S"){
    conta = conta + 2.50
    pergunta = prompt("Você deseja comer mais coxinha? \n S: sim \n N: não").toUpperCase()
    console.log("Valor parcial", conta)
}

console.log("valor total da conta", conta)
