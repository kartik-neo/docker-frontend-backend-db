const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const port = 3001;
const routes = require("./routes");

const username = "adminuser";
const password = "password123";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://10.8.10.249:27017/todos", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    auth: { user: mongo, password: mongo },
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);

  app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
  });
}

