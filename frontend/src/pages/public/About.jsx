function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="directory-label">ABOUT CARELY</span>

        <h1>
          Building a more connected healthcare experience.
        </h1>

        <p>
          Carely is being built as a healthcare technology platform connecting
          patients, doctors and hospitals through one intelligent ecosystem.
        </p>
      </section>

      <section className="about-grid">
        <div>
          <span className="directory-label">OUR VISION</span>

          <h2>
            Healthcare should feel connected, not complicated.
          </h2>
        </div>

        <div>
          <p>
            Patients should be able to discover care, understand their
            appointments, follow their queue and access their healthcare
            information without navigating disconnected systems.
          </p>

          <p>
            Doctors and hospitals should have the technology they need to
            manage appointments, patients, queues and healthcare operations
            efficiently.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;