let nota1 = 1
let nota2 = 9

let media = (nota1 + nota2) / 2

let conceito = ''

if (media >= 8) {
  conceito = 'Ótimo'
} else if (media >= 6.5) {
  conceito = 'Bom'
} else {
  conceito = 'Ruim'
}

console.log(media)
console.log(conceito)

switch (conceito) {
  case 'Ótimo':
    console.log('PARABÉNS BIXO')
    break;

  case 'Bom':
    console.log('Eita bixo!')

  case 'Ruim':
    console.log('Lascou bixo!')
  
  default:
    
    break;
}