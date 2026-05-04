import gsap from "gsap";

export function initialFX() {
  const mainEl = document.querySelector("main");

  document.body.style.overflowY = "auto";

  if (mainEl) {
    mainEl.classList.add("main-active");
  }

  // 🌑 Background animation
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // 🔥 HERO TEXT
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.3,
    }
  );

  // 🔹 Subtitle
  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.4,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.6,
    }
  );

  // 🔹 Navbar fade
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 0.2,
    }
  );

  // 🔁 LOOP TEXT
  loopText(".landing-h2-info", ".landing-h2-info-1");
  loopText(".landing-h2-1", ".landing-h2-2");
}

function loopText(text1: string, text2: string) {
  const el1 = document.querySelector(text1);
  const el2 = document.querySelector(text2);

  if (!el1 || !el2) return;

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  tl.to(text1, {
    y: -80,
    opacity: 0,
    duration: 0.8,
    delay: 3,
  })
    .fromTo(
      text2,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      }
    )
    .to(text2, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      delay: 3,
    })
    .fromTo(
      text1,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
      }
    );
}