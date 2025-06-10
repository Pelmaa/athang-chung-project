const express = require("express");

const connectMongoDB = require("./db/mongo.db");

const app = express();
connectMongoDB();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`server is running`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
