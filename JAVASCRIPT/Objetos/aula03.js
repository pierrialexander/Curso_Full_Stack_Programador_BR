function criarAluno(nome, n1, n2) {
  return {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function () {
      return (this.nota1 + this.nota2) / 2
    }
  }
}

let turma = [
  criarAluno("igor", 9, 3),
  criarAluno("justina", 5, 9)
]

let aluno = turma[1]

console.log(aluno)
console.log(aluno.media())