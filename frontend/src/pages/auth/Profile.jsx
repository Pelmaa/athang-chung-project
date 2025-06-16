import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/profile")
      .then((res) => setUser(res.data))
      .catch(() => alert("Not logged in"));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">My Profile</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phoneNumber}
      </p>
      <p>
        <strong>Gender:</strong> {user.gender}
      </p>
    </div>
  );
}

export default Profile;
