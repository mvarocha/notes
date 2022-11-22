// ********** POST **********
//pega os campos do front
var user = document.getElementById("user").value;
var password = document.getElementById("password").value;

//inicia o post
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({
    //campos no back / variavel com valor do front
    "name": user,
    "senha": password
});
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};
fetch("https://subiter.herokuapp.com/login", requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));

// ********** GET **********

//tendo a 'produtos' declarado como uma lista vazia dentro de data
//inicia o get
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
};
fetch("https://subiter.herokuapp.com/products", requestOptions)
    .then((response) => response.text())
    .then((result) => (this.produtos = JSON.parse(result))) //insere o valor obtido no get dentro da lista em data
    .catch((error) => console.log("error", error));