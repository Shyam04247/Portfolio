import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* BUILDING SOFTWARE */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>BUILDING SOFTWARE</h3>
              <p>
                I enjoy building modern and responsive web applications using React,
                TypeScript, and modern frontend technologies while continuously
                improving my skills through projects and hands-on learning.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">MySQL</div>
                <div className="what-tags">React</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">HTML</div>
                <div className="what-tags">CSS</div>
                <div className="what-tags">Operating Systems</div>
                <div className="what-tags">Software Engineering</div>
                <div className="what-tags">Computer Architecture</div>
                <div className="what-tags">Big Data</div>
                <div className="what-tags">Jupyter Notebook</div>
                <div className="what-tags">Google Colab</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* GROWING BUSINESSES */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>GROWING BUSINESSES</h3>
              <p>
                I am also exploring business development, sales, and digital marketing
                to understand how technology and communication can help businesses grow
                and connect better with people.
              </p>

              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Communication</div>
                <div className="what-tags">Client Interaction</div>
                <div className="what-tags">Product Pitching</div>
                <div className="what-tags">Team Collaboration</div>
                <div className="what-tags">Digital Marketing</div>
                <div className="what-tags">Business Strategy</div>
                <div className="what-tags">PowerPoint</div>
                <div className="what-tags">Excel</div>
                <div className="what-tags">VS Code</div>
                <div className="what-tags">Notepad++</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}