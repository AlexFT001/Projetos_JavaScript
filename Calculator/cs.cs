/* Reset some default styles for the HTML elements */
body, p, button {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Center the container divs */
div {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

/* Style the buttons */
button {
  width: 50px;
  height: 50px;
  margin: 5px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

/* Add some styles to the '=' button */
button:last-child {
  width: 110px;
  background-color: #4CAF50;
  color: #fff;
}

/* Add some styles to the 'C' button */
button:last-child:nth-child(7) {
  background-color: #FF5722;
}

/* On hover, change the background color of the buttons */
button:hover {
  background-color: #ddd;
}

/* On active (when clicked), add a darker background color */
button:active {
  background-color: #b3b3b3;
}
