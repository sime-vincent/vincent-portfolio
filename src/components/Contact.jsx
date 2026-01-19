function Contact() {
  return (
    <section style={{
      padding: "4rem 2rem",
      backgroundColor: "#020617",
      color: "#e5e7eb",
      textAlign: "center"
    }}>
      <h2 style={{
        fontSize: "2.2rem",
        marginBottom: "2rem",
        color: "#22c55e"
      }}>
        Contact & Links
      </h2>

      <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
        Let’s build impactful technology together.
      </p>

      <p>
        📧 Email:{" "}
        <a href="mailto:simevincent001@gmail.com" style={{ color: "#22c55e" }}>
          simevincent001@gmail.com
        </a>
      </p>

      <p>
        💻 GitHub:{" "}
        <a href="https://github.com/sime-vincent" target="_blank" style={{ color: "#22c55e" }}>
          github.com/sime-vincent
        </a>
      </p>

      <p>
        🔗 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/vincent-sime-945817304"
          target="_blank"
          style={{ color: "#22c55e" }}
        >
          Vincent Sime
        </a>
      </p>
    </section>
  );
}

export default Contact;
