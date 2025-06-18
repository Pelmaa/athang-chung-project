import axios from "../config/axiosConfig";

const registerUser = async (userData) => {
  const response = await axios.post("/auth/signup", userData);
  return response.data;
};
const loginUser = async (credentials) => {
  const response = await axios.post("/auth/signin", credentials);
  return response.data;
};

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

export {
  registerUser,
  loginUser,
  getAllMovies,
  addMovie,
  deleteMovie,
  updateMovie,
};
