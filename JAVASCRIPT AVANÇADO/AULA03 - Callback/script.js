// Callback

let usuarios = ['Adriano', 'Marcia', 'Jose']

function inserirUsuario(nome, callback) {
  setTimeout(() => {
    usuarios.push(nome)
    callback()
  }, 1000);
}

function listarUsuarios() {
  console.log(usuarios)
}

inserirUsuario("jerundio", listarUsuarios)

inserirUsuario('nicolau', listarUsuarios)

inserirUsuario('Florentina', listarUsuarios)