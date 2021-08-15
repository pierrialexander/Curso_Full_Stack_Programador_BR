function calcMedia() {
  return (this.notas[0] + this.notas[1]) / 2; 
}

let aluno = {
  nome: 'Joao',
  notas: [9,8],

  media: calcMedia
}

let aluno1 = {
  nome: 'Lorisleu',
  notas: [5,1],

  media: calcMedia
}


console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())
