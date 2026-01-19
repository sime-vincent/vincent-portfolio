function Projects() {
  return (
    <section style={{
      padding: "4rem 2rem",
      backgroundColor: "#020617",
      color: "#e5e7eb"
    }}>
      <h2 style={{
        fontSize: "2.2rem",
        textAlign: "center",
        marginBottom: "3rem",
        color: "#22c55e"
      }}>
        Projects
      </h2>

      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        backgroundColor: "#020617",
        border: "1px solid #22c55e",
        borderRadius: "12px",
        padding: "2rem"
      }}>
        <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
          🌱 Eco-AI — Climate Intelligence Platform
        </h3>

        <p style={{ lineHeight: "1.7", fontSize: "1.05rem" }}>
          Eco-AI is an AI-powered climate technology platform designed to combat
          deforestation and support reforestation through data-driven decision
          making. The platform combines machine learning, satellite imagery,
          climate data, and community reporting to identify optimal tree-planting
          zones, monitor forest health, and track environmental impact.
          <br /><br />
          Eco-AI is built to be inclusive — supporting smartphones, web dashboards,
          and USSD for communities without smartphones. It empowers communities,
          institutions, and policymakers with actionable insights while promoting
          sustainable land management and climate resilience.
        </p>

        <p style={{
          marginTop: "1.5rem",
          fontStyle: "italic",
          color: "#94a3b8"
        }}>
          Status: Prototype / Early-Stage Deployment
        </p>
      </div>
    </section>
  );
}

export default Projects;
