const mongoose = require("mongoose");
const movieSchema = mongoose.Schema({
  plot: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
    max: 2020, //POsso especificar o maximo ou o minimo para o valor
  },
  released: {
    type: Date,
    default: Date.now,
  },
});
const movieModel = mongoose.model("movie", movieSchema);

module.exports = movieModel;
//xport { movieModel };
/*
//aqui digo qual a minha coleçao e qual vai ser o schema dela
/// dizendo que minha coleçao movies é do modelo movieschena
const movie = mongoose.model("movie");

new movie({
  name: "meu filme",
  plot: "meu plor",
  year: 1990,
  released: 2020,
})
  .save()
  .then(() => console.log("documento inserido com sucesso"))
  .catch((err) => console.log("documento nao foi inserido"));
*/
