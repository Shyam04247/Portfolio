import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  // 🔥 PROJECT DATA
  const projects = [
    {
      title: "Coding Samurai Internship Tasks",
      category: "Frontend Development",
      tech: "HTML, CSS, JavaScript, Responsive Design",
      description:
        "Completed multiple real-world frontend projects focusing on UI design, responsiveness, and problem-solving.",
      github:
        "https://github.com/Shyam04247/CODING-SAMURAI-INTERNSHIP-TASK",
    },
    {
      title: "HighRadius Business Program",
      category: "Sales & Marketing",
      tech: "Business Strategy, Marketing, Communication",
      description:
        "Learned business growth, sales strategies, and professional communication through industry-level training.",
      github: "",
    },
    {
      title: "HireX Recruitment Platform",
      category: "Full Stack Project",
      tech: "React, TypeScript, Node.js",
      description:
        "Developed a modern recruitment platform with a clean UI to improve hiring experience for users and recruiters.",
      github: "https://github.com/Shyam04247/HireX",
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      tech: "React, TypeScript, Vite",
      description:
        "Built a responsive and animated portfolio website to showcase my skills and projects.",
      github: "",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and Features</h4>
                <p>{project.tech}</p>

                <p style={{ marginTop: "10px" }}>
                  {project.description}
                </p>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;