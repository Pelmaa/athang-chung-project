const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  year: Number,
  watched: Boolean,
  genre: String,
  rating: Number,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Movie = mongoose.model("movies", movieSchema);
module.exports = Movie;
