function login() {
  var username = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  if (username == "tudo" && password == "nada") {
    location.href = "home.html";
  } else {
    alert("burro");
  }
}

function retornar() {
  location.href = "Login.html";
}