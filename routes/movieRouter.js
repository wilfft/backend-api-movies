const express = require("express");
const movieRouter = express();
const movieModel = require("../models/movieModel.js");

//CREATE MOVIE
movieRouter.post("/movies", async (req, res) => {
  try {
    const movie = new movieModel(req.body);
    console.log("adicionado" + movie);
    await movie.save();
    res.send(movie);
    console.log(movie);
  } catch (err) {
    res.status(500).send(err);
  }
});

//RETRIEVE MOVIE
movieRouter.get("/movies", async (req, res) => {
  console.log("buscando dados");
  try {
    const movie = await movieModel.find().limit(20);
    res.send(movie);
  } catch (err) {
    res.status(500).send(err);
  }
});

//UPDATE MOVIE
movieRouter.patch("/movies/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await movieModel.findByIdAndUpdate({ _id: id }, req.body, {
      new: true, //TRAZ O NOVO ELEMENTO EM TEKA
    });
    res.send(movie);
  } catch (err) {
    res.status(500).send(err);
  }
});

//DELETE MOVIE
movieRouter.delete("/movies/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const movie = await movieModel.findByIdAndDelete({ _id: req.params.id });
    console.log("Filme " + movie.title + " será removido");
    if (!movie) {
      res.status(404).send("Documento nao encontrado");
    } else {
      res.sendStatus(200).send();
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//export { app as movieRouter };
module.exports = movieRouter;

//return movieRouter;
//module.exports = movieRouter;
//export { app as movieRouter };
/*
 //console.log(JSON.stringify("movie", null, 2));
    // res.send(movie.JSON.stringify(true));rs
     //pego do req.paramns, uso o metodo do mongoose que recebe 2 paramentros
      //o filtro, e os campos que vou atualizar
      //new: true, taz o documento altualizado, sem, traz desatualizado
*/
