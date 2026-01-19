function InvestorPitch() {
  return (
    <section style={{
      padding: "4rem 2rem",
      backgroundColor: "#020617",
      color: "#e5e7eb"
    }}>
      <h2 style={{
        fontSize: "2.2rem",
        textAlign: "center",
        marginBottom: "2.5rem",
        color: "#22c55e"
      }}>
        Investor Pitch
      </h2>

      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: "1.8",
        fontSize: "1.05rem"
      }}>
        <p>
          <strong>Eco-AI</strong> is a climate intelligence platform addressing
          deforestation, climate risk, and poor land-use planning in vulnerable
          communities. By combining AI, satellite insights, and grassroots data
          collection, Eco-AI enables smarter reforestation, carbon tracking, and
          environmental monitoring.
        </p>

        <p style={{ marginTop: "1.5rem" }}>
          The platform is built for scale across Africa and emerging markets,
          supporting governments, NGOs, institutions, and community groups.
          Inclusive access via smartphones and USSD ensures no community is left
          behind.
        </p>

        <p style={{ marginTop: "1.5rem", fontStyle: "italic", color: "#94a3b8" }}>
          Seeking: Seed funding, strategic partnerships, and mentorship to scale
          deployment and data intelligence.
        </p>
      </div>
    </section>
  );
}

export default InvestorPitch;
