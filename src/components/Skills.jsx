function Skills() {
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
        Skills & Tech Stack
      </h2>

      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        <div>
          <h3>💻 Programming</h3>
          <p>JavaScript, Python, SQL</p>
        </div>

        <div>
          <h3>⚛️ Frontend</h3>
          <p>React, HTML5, CSS3</p>
        </div>

        <div>
          <h3>🧠 Backend & APIs</h3>
          <p>Node.js, REST APIs</p>
        </div>

        <div>
          <h3>☁️ DevOps & Cloud</h3>
          <p>Git, GitHub, GitHub Pages</p>
        </div>

        <div>
          <h3>🌍 Climate & Data</h3>
          <p>AI/ML Basics, Climate Data, GIS Concepts</p>
        </div>

        <div>
          <h3>📱 Inclusive Tech</h3>
          <p>USSD Systems, Mobile-First Design</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
