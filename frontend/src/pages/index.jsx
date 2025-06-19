import { useEffect, useState } from "react";

import { addMovie, deleteMovie, getAllMovies, updateMovie } from "../api/api";
import Navbar from "../components/Navbar";

const initialData = {
  name: "",
  year: "",
  genre: "",
  rating: "",
  watched: false,
};

const Home = () => {
  const [form, setForm] = useState({ ...initialData });
  const [movies, setMovies] = useState([]);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const isUpdate = !!form._id;

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await getAllMovies();
    setMovies(response.data?.movies || []);
  };

  const handleDialog = (isOpen) => {
    setDialogOpen(isOpen);
    if (!isOpen) {
      setForm({ ...initialData });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteMovie(id);
      if (response && response.data) {
        await fetchMovies();
      }
    } catch (error) {
      console.error("Error deleting movie: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (isUpdate) {
        response = await updateMovie(form._id, form);
      } else {
        response = await addMovie(form);
      }

      if (response && response.data) {
        await fetchMovies();
        handleDialog(false);
      }
    } catch (error) {
      console.error("Error from handleSubmit: ", error);
    }
  };

  const handleUpdate = (movie) => {
    const { userId, __v, ...data } = movie;
    handleDialog(true);
    setForm(data);
  };

  return (
    <div>
      <Navbar />

      <div className="movie-container">
        <h1>Movie List</h1>
        <button className="add-button" onClick={() => handleDialog(true)}>
          Add
        </button>
        <ul className="movie-list">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <li key={movie._id} className="movie-item">
                <div>
                  <p className="movie-title">
                    {movie.name} ({movie.year})
                  </p>
                  <p>Genre: {movie.genre}</p>
                  <p>Rating: {movie.rating}/10</p>
                  {movie.watched && <p className="watched">Watched</p>}
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    className="update-button"
                    onClick={() => handleUpdate(movie)}
                  >
                    Update
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(movie._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div style={{ fontSize: "1.8em" }}>No movies. Start adding!</div>
          )}
        </ul>

        {isDialogOpen && (
          <div className="dialog-overlay">
            <div className="dialog">
              <h2>{isUpdate ? "Update Movie" : "Add Movie"}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Movie Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    name="year"
                    placeholder="Year"
                    value={form.year}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="genre"
                    placeholder="Genre"
                    value={form.genre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating (1–10)"
                    value={form.rating}
                    onChange={handleChange}
                    required
                    min={1}
                    max={10}
                  />
                </div>

                {isUpdate && (
                  <div className="form-group">
                    <label>
                      <input
                        type="checkbox"
                        name="watched"
                        checked={form.watched}
                        onChange={handleChange}
                      />
                      <span> Watched</span>
                    </label>
                  </div>
                )}

                <div className="form-actions">
                  <button type="button" onClick={() => handleDialog(false)}>
                    Cancel
                  </button>
                  <button type="submit">{isUpdate ? "Update" : "Add"}</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
