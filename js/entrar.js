// Configuração do Firebase 

const firebaseConfig = { 

    apiKey: "AIzaSyAHOPak6BXXz-2CbCTbCI3e1R56l88prCU",
    authDomain: "jclprojetosenaisop.firebaseapp.com",
    projectId: "jclprojetosenaisop",
    storageBucket: "jclprojetosenaisop.appspot.com",
    messagingSenderId: "870271603946",
    appId: "1:870271603946:web:3e25cbc285ddda60d47393" 

 }; 

// Inicializa o Firebase 

firebase.initializeApp(firebaseConfig); 



// Lógica para autenticação de login 

document.getElementById('loginForm').addEventListener('submit', function(e) { 

 e.preventDefault(); 



 var userEmail = document.getElementById('userEmail').value; 

 var userPassword = document.getElementById('userPassword').value; 



 firebase.auth().signInWithEmailAndPassword(userEmail, userPassword) 

 .then((userCredential) => { 

     // Login bem-sucedido 

     var user = userCredential.user; 

     console.log("Login realizado com sucesso: ", user); 

     alert ("Login realizado com sucesso: ", user); 

     // Redirecionar para outra página ou mostrar conteúdo para usuário logado 

     window.location.href = 'indexAutenticado.html'; 

 }) 

 .catch((error) => { 

     var errorCode = error.code; 

     var errorMessage = error.message; 

     console.error("Erro no login: ", errorCode, errorMessage); 

     alert("Falha no login: " + errorMessage); 

 }); 

});