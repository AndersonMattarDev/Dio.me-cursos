// Laços de Repetição: For
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`Valor: ${i} x 5 = ${i * 5}`);
  }
}

console.log('-------------------');

// Laços de Repetição: While
let x = 1;
while (x < 10) {
    console.log(`Valor: ${x} x 5 = ${x * 5}`);
    x++;
}
console.log('-------------------');
// Laços de Repetição: for each
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
valores.forEach((valor) => {
  console.log(`Valor: ${valor} x 5 = ${valor * 5}`);
});

// Laços de Repetição: map
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = valores2.map((valor) => {
  return valor * 5;
});

console.log('-------------------');

console.log(resultado);