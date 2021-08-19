//let image = document.getElementById('like')

//image.addEventListener('click', function () {
// image.setAttribute('src', 'https://cdn1.iconfinder.com/data/icons/youtuber/256/thumbs-up-like-gesture-512.png')
//})

//-------------------------------------------------

let lista = document.getElementById("lista")
//let num  = parseInt(lista.getAttribute("data-num"))

//setando um valor ao atributo 
lista.dataset.num = 15

let num = parseInt(lista.dataset.num)


let conteudo = ""

for (let i = 0; i < num; i++) {
  conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo