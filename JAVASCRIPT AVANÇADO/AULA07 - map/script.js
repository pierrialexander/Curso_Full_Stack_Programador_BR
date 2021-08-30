function novoAluno(nome, idade) {
  return {nome, idade}
}

let alunos = [
  novoAluno("Mario", 23),
  novoAluno("Paulo", 45),
  novoAluno("Joana", 32),
  novoAluno("Nicole", 19),
];

function nomeIdade(aluno) {
  return aluno.nome  + " tem " + aluno.idade  + " anos."
}

console.log(alunos.map(nomeIdade))




