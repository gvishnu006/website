document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("ctaBtn");
  const counter = document.getElementById("counter");
  let clicks = 0;

  if (btn && counter) {
    btn.addEventListener("click", () => {
      clicks += 1;
      counter.textContent = `Button clicked: ${clicks} time${clicks === 1 ? "" : "s"}`;
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
