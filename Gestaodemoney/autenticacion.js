/*
const loginButton = document.querySelector(".btn btn-dark btn-lg btn-block")

loginButton.addEventListener("click", function(){ 
    let email = document.getElementById("login").email;

    if(email == ""){
        alert("Deu?")
    }
})
*/

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://Admin:xA73hA9yUa9ReRq7@gerenciamentotiago.k7hvnd1.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

function validateLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
}

async function addUser() {

     let username = document.getElementById("newUserName").value;
    let email = document.getElementById("newEmail").value;
    let password = document.getElementById("newPassword").value;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("Gerencia");
    const collection = database.collection("Users");

    const result = await collection.insertOne({
      _id: "020",
      UserName: username,
      Email: email,
      PassWord: password,
    });

    console.log(`Inserted document with _id: ${result.insertedId}`);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

