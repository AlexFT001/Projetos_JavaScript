const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { use } = require("passport");
const app = express();
const port = 5500;

const uri =
  "mongodb+srv://Admin:x/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(express.static("public")); // Serve static files from the "public" directory
app.use(express.json());

app.get("/getUser", async (req, res) => {
  try {
    await client.connect();

    const database = client.db("Gerencia");
    const collection = database.collection("Users");
    // Access query parameters using req.query
    const { Email, Password } = req.query;

    const query = { Email: Email, PassWord: Password };
    // Find the user with the specified email
    const user = await collection.find(query).toArray();

    if (user.length > 0) {
      console.log("User found:", user)
      res.status(200).json({ message: "User found", user });
    } else {
      console.log("User not found");
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/addUser", async (req, res) => {
  try {
    await client.connect();

    const database = client.db("Gerencia");
    const collection = database.collection("Users");

    const { UserName, Email, PassWord } = req.body;

    const result = await collection.insertOne({
      UserName,
      Email,
      PassWord,
    });

    console.log(`Inserted document with _id: ${result.insertedId}`);
    res.json({ message: `Inserted document with _id: ${result.insertedId}` });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
