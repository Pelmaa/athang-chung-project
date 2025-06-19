const teamMembers = [
  {
    name: "Pema Wangchuk",
    role: "Fullstack Developer",
    logo: "https://cdn-icons-png.flaticon.com/128/921/921347.png",
    website: "https://pelmaa.netlify.app",
    image:
      "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/491868579_718230300609029_1705008702836889964_n.jpg?ccb=11-4&oh=01_Q5Aa1wF4TeN98OimkTyM8yflL6GYjbAZaXx_E7lQAk1BTeVv1g&oe=685CECFD&_nc_sid=5e03e0&_nc_cat=107",
  },
  {
    name: "Jamyang Dolma",
    role: "Frontend Developer",
    logo: "https://cdn-icons-png.flaticon.com/128/1995/1995524.png",
    website: "https://jamyang-profile.netlify.app",
    image: "https://jamyang-profile.netlify.app/profile.jpeg",
  },
  {
    name: "Phurba Wangmo Sherpa",
    role: "Frontend Developer",
    logo: "https://cdn-icons-png.flaticon.com/128/1995/1995524.png",
    website: "https://phurbawangmo.netlify.app",
    image: "https://phurbawangmo.netlify.app/myphoto.jpg",
  },
  {
    name: "Tak Nath Dahal",
    role: "Frontend Developer",
    logo: "https://cdn-icons-png.flaticon.com/128/1995/1995524.png",
    website: "https://tek-nath.netlify.app",
    image:
      "https://th.bing.com/th/id/OIP.xeyvrTy4NaFs8QqyJVxhFwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "Phuntsho Galey Namgay",
    role: "Backend Developer",
    logo: "https://cdn-icons-png.flaticon.com/128/3575/3575821.png",
    website: "https://galeynamgay.netlify.app",
    image:
      "https://th.bing.com/th/id/OIP.OBJB6UE95QMV4ay8hl7bHQHaLI?w=122&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
];

const Team = () => {
  return (
    <section style={styles.container}>
      <div style={styles.overlay}>
        <h2 style={styles.title}>🌟 The Members</h2>
        <p style={styles.subtitle}>
          Meet our vibrant Chung team — a group of passionate learners striving
          to build creative, impactful digital experiences. We're committed to
          growing our skills and contributing to the rising tech scene in
          Bhutan.
        </p>
        <div style={styles.grid}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={member.image}
                alt={`${member.name}'s profile`}
                style={styles.profile}
              />
              <div style={styles.nameContainer}>
                <img
                  src={member.logo}
                  alt={`${member.name} logo`}
                  style={styles.logo}
                />
                <h3 style={styles.name}>{member.name}</h3>
              </div>
              <p style={styles.role}>{member.role}</p>
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    backgroundImage: `url("https://images.unsplash.com/photo-1587614382346-4ec1d1233d0b")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "4rem 2rem",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "16px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "3rem 2rem",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxShadow: "0 0 30px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "2.5rem",
    color: "#1e3a8a",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#334155",
    maxWidth: "800px",
    margin: "0 auto 2.5rem",
    lineHeight: "1.7",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "2rem",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "1.5rem",
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "0.4rem",
  },
  logo: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    fontSize: "1.4rem",
    color: "#0f172a",
    fontWeight: "600",
  },
  role: {
    fontSize: "1.1rem",
    color: "#475569",
  },
  link: {
    color: "#1d4ed8",
    textDecoration: "none",
    fontWeight: "500",
    marginTop: "0.5rem",
    display: "inline-block",
  },
  profile: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 auto 1rem",
    boxShadow: "0 0 6px rgba(0,0,0,0.1)",
  },
};

export default Team;
