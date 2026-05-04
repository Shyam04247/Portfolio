import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {
        e.preventDefault();

        const target = element.getAttribute("data-href");
        const section = document.querySelector(target!);

        section?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }, []);

  return (
    <>
      <div className="header">
        {/* 🔥 LOGO */}
        <img src="/logo.png" alt="KSP Logo" className="logo-img" />

        {/* 🔥 EMAIL */}
        <a
          href="mailto:kshyamsundarpatra@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          kshyamsundarpatra@gmail.com
        </a>

        {/* 🔗 NAV LINKS */}
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;