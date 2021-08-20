// THIS E BIND

function speakGeneric() {
  console.log(this.sound)
}

let cat = {
  sound: "Miau",
  speak: speakGeneric
}

let dog = {
  sound: "Au Au",
  speak: speakGeneric
}

/* dog.speak()
cat.speak() */
let bindedFuntion = speakGeneric.bind(cat)

bindedFuntion()


