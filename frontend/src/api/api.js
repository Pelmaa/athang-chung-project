import axios from "../config/axiosConfig";

const getAllMovies = () => {
  return axios.get("/movies/");
};

const addMovie = (data) => {
  return axios.post("/movies/", data);
};

const deleteMovie = (id) => {
  return axios.delete(`/movies/${id}`);
};

const updateMovie = (id, data) => {
  return axios.put(`/movies/${id}`, data);
};

export { getAllMovies, addMovie, deleteMovie, updateMovie };
