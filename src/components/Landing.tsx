import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          
          {/* LEFT SIDE */}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            
            <h1>
              K SHYAMSUNDAR
              <br />
              <span>PATRA</span>
            </h1>

            {/* 🔥 ADD INTRO HERE */}
            <p className="landing-description">
              I am passionate about software development, digital marketing,
             sales strategy, and building solutions that help businesses grow.
             I combine technical skills with marketing knowledge to create
             high-impact digital experiences.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">BUILDING</div>
              <div className="landing-h2-2">GROWING</div>
            </h2>
            <h2>
              <div className="landing-h2-info">SOFTWARE</div>
              <div className="landing-h2-info-1">BUSINESS</div>
            </h2>
          </div>

        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;