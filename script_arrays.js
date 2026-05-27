const alunos = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 16 },
    { nome: 'Pedro', idade: 19 },
    { nome: 'Luíza', idade: 17 }
];

alunos.push({ nome: 'Ana', idade: 21 }); // Adiciona um novo aluno ao array
alunos.push({ nome: 'Sophia', idade: 9 });

console.log(alunos[0].nome) // João
console.log(alunos[1].idade) // 22
console.log(alunos[2].nome) // Pedro
console.log(alunos[3].nome) // Ana

//funcionalidades ES6

//filter: filtra os elementos do array com base em uma condição
const alunosFiltrados = alunos.filter(aluno => aluno.idade >= 18)
console.table(alunosFiltrados)

//find: retorna o primeiro elemento do array que satisfaz a condição
const alunoPedro = alunos.find(aluno => aluno.nome === 'Pedro')
console.log(alunoPedro) // { nome: 'Pedro', idade: 19 }

//findIndex: retorna o índice do primeiro elemento do array que satisfaz a condição
const alunoJoãoIndex = alunos.findIndex(aluno => aluno.nome === 'João')
console.log(alunoJoãoIndex) // 0

//reduce: reduz o array a um único valor, aplicando uma função a cada elemento
const idades = alunos.reduce((acc, aluno) => {
    return acc + aluno.idade
}, 0)

console.log(idades)

//some: verifica se pelo menos um elemento do array satisfaz a condição
const temAlunosMenoresDe10 = alunos.some(aluno => aluno.idade <= 10)
console.log(temAlunosMenoresDe10)

//every: verifica se todos os elementos do array satisfazem a condição
const todosAlunosMaioresDe15 = alunos.every(aluno => aluno.idade >= 9)
console.log(todosAlunosMaioresDe15)