let alunos = ['nicolas', 'florentina', 'justina', 'belchior']

for (let i = 0; i < alunos.length; i++) {
  console.log(`Na posição ${i} está ${alunos[i]}`)
}

for (let aluno of alunos) {
  console.log(aluno)
}