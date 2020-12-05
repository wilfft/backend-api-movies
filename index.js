const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use("/api", require("./routes/movieRouter.js"));
app.get("/", (req, res) => res.send("bem vindo"));
app.listen(8000, () => console.log("API iniciada"));

(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://wil:123@cluster0.bnaca.mongodb.net/sample_mflix?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conectado ao MongoDb Atlas");
  } catch (err) {
    console.log("Erro ao conectar ao MongoDb Atlas " + err);
  }
})();
//import { movieRouter } from "./routes/movieRouter.js";
//const movieRouter = require("./routes/movieRouter");
//app.use(movieRouter);
//const movieRouter = require("./routes/movieRouter");
