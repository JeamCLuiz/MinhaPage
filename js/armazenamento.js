 // Substitua as configurações abaixo com as configurações do seu projeto Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyAHOPak6BXXz-2CbCTbCI3e1R56l88prCU",
    authDomain: "jclprojetosenaisop.firebaseapp.com",
    projectId: "jclprojetosenaisop",
    storageBucket: "jclprojetosenaisop.appspot.com",
    messagingSenderId: "870271603946",
    appId: "1:870271603946:web:3e25cbc285ddda60d47393"   
 };

 // Inicialize o Firebase
 firebase.initializeApp(firebaseConfig);

 // Referência ao Storage
 const storage = firebase.storage();

 // Elementos HTML
 const fileInput = document.getElementById('fileInput');
 const fileList = document.getElementById('fileList');

 // Função para fazer upload do arquivo
 function uploadFile() {
     const file = fileInput.files[0];

     if (file) {
         // Crie uma referência única para o arquivo no Storage
         const storageRef = storage.ref().child(file.name);

         // Faça upload do arquivo para o Storage
         storageRef.put(file).then(snapshot => {
             // Obtenha a URL de download do arquivo
             storageRef.getDownloadURL().then(url => {
                 // Crie elementos HTML para exibir o arquivo
                 const listItem = document.createElement('li');
                 listItem.className = 'fileItem';
                 listItem.innerHTML = `
                     <strong>${file.name}</strong> - 
                     <a href="${url}" target="_blank">Download</a>
                 `;

                 // Adicione o item à lista
                 fileList.appendChild(listItem);

                 // Limpe o campo de entrada de arquivo
                 fileInput.value = '';
             });
         });
     }
 }

 // Função para visualizar arquivos existentes
 function displayFiles() {
     fileList.innerHTML = '';

     // Listar todos os arquivos no Storage
     storage.ref().listAll().then(result => {
         result.items.forEach(itemRef => {
             // Obter a URL de download do arquivo
             itemRef.getDownloadURL().then(url => {
                 // Criar elementos HTML para exibir o arquivo
                 const listItem = document.createElement('li');
                 listItem.className = 'fileItem';
                 listItem.innerHTML = `
                     <strong>${itemRef.name}</strong> - 
                     <a href="${url}" target="_blank">Download</a>
                 `;

                 // Adicionar o item à lista
                 fileList.appendChild(listItem);
             });
         });
     }).catch(error => {
         console.error("Error getting files: ", error);
     });
 }