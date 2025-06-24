import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useAuth } from "../../context/AuthContext";
import { getAllMovies } from "../../api/api";
import "./profile.css";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/Loading";

const Profile = () => {
  const { user, isLoading } = useAuth();
  const [movies, setMovies] = useState([]);
  const [isMovieLoading, setMovieLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getAllMovies();
        const userMovies = data.filter((movie) => movie.userId === user?._id);
        setMovies(userMovies);
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setMovieLoading(false);
      }
    };

    if (user?._id) fetchMovies();
  }, [user]);

  if (isLoading || isMovieLoading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  if (!user?.email) {
    return (
      <>
        <Navbar />
        <p style={{ textAlign: "center", color: "#fff" }}>
          User not logged in.
        </p>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <h2>👤 Your Profile</h2>
          <p>
            <strong>Full Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email Address:</strong> {user.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {user.phoneNumber || "Not provided"}
          </p>
          <p>
            <strong>Gender:</strong> {user.gender}
          </p>
          <p>
            <strong>Joined On:</strong>{" "}
            {new Date(user.createdAt).toLocaleDateString()}
          </p>
          <p>
            <strong>Status:</strong> Active
          </p>

          <hr />

          <hr />
          <p className="note">
            This is your WatchBuddy profile. Enjoy your watch journey!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
