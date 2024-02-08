const { response } = require("express");

async function getUser(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve form data
  const Email = document.getElementById("email").value;
  const PassWord = document.getElementById("password").value;

  try {
    // Construct the query parameters for the GET request
    const queryParams = `?Email=${Email}&Password=${PassWord}`;

    // Make a GET request with the constructed URL
    const response = await fetch(`/getUser${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
    );

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function addUser(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve form data
  const newUserName = document.getElementById("newUserName").value;
  const newEmail = document.getElementById("newEmail").value;
  const newPassword = document.getElementById("newPassword").value;

  try {
    const response = await fetch("/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserName: newUserName,
        Email: newEmail,
        PassWord: newPassword,
      }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}
