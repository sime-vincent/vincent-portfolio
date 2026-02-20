import profile from "../assets/vincent.jpg";

function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0f172a",
      color: "#ffffff",
      textAlign: "center",
      padding: "2rem"
    }}>

      {/* PROFILE IMAGE */}
      <img
        src={profile}
        alt="Vincent Sime"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "4px solid #22c55e",
          marginBottom: "1.5rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
        }}
      />

      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Vincent Sime
      </h1>

      <p style={{ fontSize: "1.3rem", marginTop: "1rem", maxWidth: "700px" }}>
        Computer Scientist • Climate Tech Founder • Full Stack Developer
      </p>

      <p style={{ marginTop: "1.5rem", fontSize: "1rem", color: "#cbd5e1" }}>
        Building inclusive AI solutions for climate action, sustainability,
        and digital transformation in Africa.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <a
          href="https://github.com/sime-vincent"
          target="_blank"
          style={{
            marginRight: "1rem",
            padding: "0.7rem 1.5rem",
            backgroundColor: "#22c55e",
            color: "#000",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/vincent-sime-945817304"
          target="_blank"
          style={{
            padding: "0.7rem 1.5rem",
            border: "2px solid #22c55e",
            color: "#22c55e",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          LinkedIn
        </a>
      </div>

    </section>
  );
}

export default Hero;

