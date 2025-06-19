import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <p>Loading your profile...</p>;
  }

  if (!user?.email) {
    return <p>User not logged in.</p>;
  }

  return (
    <div className="profile-container">
      <h2> Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {user.phoneNumber}
      </p>
      <p>
        <strong>Gender:</strong> {user.gender}
      </p>
    </div>
  );
};

export default Profile;
