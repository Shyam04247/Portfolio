import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* 🎓 BSC */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Science (Botany)</h4>
                <h5>Utkal University (Begunia Degree College)</h5>
              </div>
              <h3>2020 – 2023</h3>
            </div>
            <p>
              Completed graduation with a CGPA of 7.55. Developed strong
              analytical and research skills through scientific study. This
              foundation enhanced problem-solving ability and logical thinking,
              which I now apply in software development and technology.
            </p>
          </div>

          {/* 🎓 MCA */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Masters in Computer Applications</h4>
                <h5>KIIT Deemed to be University</h5>
              </div>
              <h3>2024 – 2026</h3>
            </div>
            <p>
              Completed MCA with a CGPA of 7.79. Focused on software development,
              AI/ML, and modern computing technologies. Built strong foundations
              in programming, system design, and real-world applications.
            </p>
          </div>

          {/* 💼 EXPERIENCE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Development Counsellor</h4>
                <h5>PlanetSpark</h5>
              </div>
              <h3>May 2026 – Present</h3>
            </div>
            <p>
              Working in business development, focusing on client interaction,
              sales strategy, and product pitching. Driving growth by connecting
              customer needs with technology-driven solutions and improving
              overall user engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;