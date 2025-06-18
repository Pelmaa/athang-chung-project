const teamMembers = [
  {
    name: "Pema Wangchuk",
    role: "Fullstack Developer",
  },
  {
    name: "Jamyang Dolma",
    role: "Frontend Developer",
  },
  {
    name: "Phurba Wangmo Sherpa",
    role: "Frontend Developer",
  },
  {
    name: "Tak Nath Dahal",
    role: "Frontend Developer",
  },
  {
    name: "Phuntsho Galey Namgay",
    role: "Backend Developer",
  },
];

const Team = () => {
  return (
    <div
      style={{
        ...styles.container,
        backgroundImage:
          "url('https://th.bing.com/th/id/OIP.KdjnJ7m7cseqeWznfdlZSQHaEK?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <h2 style={styles.title}>The Chung members</h2>
      <p style={styles.subtitle}>
        Meet our dedicated Chung team members, committed to delivering
        exceptional results. We are constantly exploring innovative ways to
        enhance our movie website project. Our team is made up of passionate web
        development learners who are eager to grow, contribute, and make a
        meaningful impact in a country where IT knowledge is still emerging.
      </p>
      <div style={styles.teamGrid}>
        {teamMembers.map((member, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.name}>{member.name}</h3>
            <p style={styles.role}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "2rem",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  teamGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",
    padding: "1rem",
    width: "200px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    color: "#2c3e50",
  },

  name: {
    fontSize: "1.2rem",
    margin: "0.5rem 0 0.2rem",
  },
  role: {
    fontSize: "1rem",
  },
};

export default Team;
