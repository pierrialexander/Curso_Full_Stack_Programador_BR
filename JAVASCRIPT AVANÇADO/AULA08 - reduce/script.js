function novoAluno(nome, idade) {
  return {nome, idade}
}

let alunos = [
  novoAluno("Mario", 23),
  novoAluno("Paulo", 45),
  novoAluno("Joana", 32),
  novoAluno("Nicole", 19),
]

function idadeDaTurma(total, aluno) {
  return total + aluno.idade
}

console.log(alunos.reduce(idadeDaTurma, 0))




