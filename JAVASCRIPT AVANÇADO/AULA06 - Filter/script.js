function novoAluno(nome, idade) {
  return {nome, idade}
}

let alunos = [
  novoAluno("Mario", 23),
  novoAluno("Paulo", 45),
  novoAluno("Joana", 32),
  novoAluno("Nicole", 19),
];

function temMenosde30(aluno) {
  return aluno.idade < 30
}

function temMaisde30(aluno) {
  return aluno.idade > 30
}

let alunosComMenosde30 = alunos.filter(temMenosde30)

let alunosComMenosde30 = alunos.filter(temMaisde30)

console.log(alunosComMenosde30)

console.log(alunosComMaisde30)



