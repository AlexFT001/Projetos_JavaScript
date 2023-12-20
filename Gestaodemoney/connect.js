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

// Get
async function get() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    const database = client.db("Gerencia");
    const collection = database.collection("Users");
    
    const query = {};
    const result = await collection.find(query).toArray();

    console.log("Retrieved data:", result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
get().catch(console.dir);

// insert
async function insert() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("Gerencia");
    const collection = database.collection("Users");
    
    const result = await collection.insertOne({
      _id: 12,
      UserName: "john_doe",
      Email: "john.doe@example.com",
      PassWord: "secure_password",
    });

    console.log(`Inserted document with _id: ${result.insertedId}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

insert().catch(console.dir);