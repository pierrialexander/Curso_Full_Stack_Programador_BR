let nomes = ['Justina', 'Nicole', 'Lirislei']

let notasA = [7, 5, 8]
let notasB = [4, 8, 9]

function media(n1, n2) {
  return (n1 + n2) / 2
}

function situacao(media) {
  if (media >= 7 ) {
    return "Aprovado"
  } else {
    return "reprovado"
  }
}

for (let index in nomes) {
  let nota1 = notasA[index]
  let nota2 = notasB[index]

  var m = media(nota1, nota2)

  console.log(nomes[index] + 
    " - " + nota1 + 
    " - " + nota2 + 
    " - " + m + 
    " - " + situacao(m))
}