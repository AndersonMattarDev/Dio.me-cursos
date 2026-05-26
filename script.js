// Operadores aritméticos
const valor1 = 10;
const valor2 = 2;

console.log("Soma:", valor1 + valor2);
console.log("Subtração:", valor1 - valor2);
console.log("Multiplicação:", valor1 * valor2);
console.log("Divisão:", valor1 / valor2);

// Condicional if-else

const idade = 10;
if(idade > 18){
    console.log("Maior que 18.");
} else {
    console.log("Menor que 18.");
}

// Switch case

const nota = 9;
switch(true){
    case nota < 5:
        console.log("Abaixo da média.");
        break;
    case nota >= 5 && nota < 7:
        console.log("Na média.");
        break;    
    default:
        console.log("Acima da média.");
}
// Operador ternário
const nota2 = 4;
nota2 >= 5 ? console.log("Aprovado.") : console.log("Reprovado.");