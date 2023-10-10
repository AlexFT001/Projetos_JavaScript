function login() {
  var username = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  if (username == "Alex" && password == "123") {
    alert("Login successfully");
    location.href = "home.html"
    $("#Nome").text("username");
  } else {
    alert("burro");
  }
}
