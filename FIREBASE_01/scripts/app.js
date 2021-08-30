<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBR1WkGr5PZ2ZcKz2QQGsqZlLC8xEDXPJ4",
    authDomain: "colegio-2f928.firebaseapp.com",
    projectId: "colegio-2f928",
    storageBucket: "colegio-2f928.appspot.com",
    messagingSenderId: "1053209312210",
    appId: "1:1053209312210:web:55d6cda00acc4ea523260b",
    measurementId: "G-B7BJ8Q566Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  let db = firebase.firestore()


  //ler todos os dados de uma coleção
  db.collection("turmaA").get()
                         .then((sanpshot)=>{
                           sanpshot.forEach((doc)=>{
                             let aluno = doc.data()
                             console.log(aluno.nome)
                             console.log(aluno.sobrenom)
                             
                           })
                         })

let docRef = db.collection("turmaA").doc("t1iFSVn0YWbp8EEQqyYw")

docRef.get().then((doc) => {
  console.log(doc.data())
})


