// Callback

let usuarios = ['Adriano', 'Marcia', 'Jose']

function inserirUsuario(nome) {

  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      usuarios.push(nome)
      
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject({msg: "Erro Qualquer"})
      }

    }, 1000);
  })

  return promise
  
}

async function executar() {
  await inserirUsuario("Beltrano")
}

executar()