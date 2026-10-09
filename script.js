document.addEventListener("DOMContentLoaded", () => {
  const cta = document.getElementById("cta");
  if (cta) {
    cta.addEventListener("click", () => {
      alert("Welcome! Let's get started.");
    });
  }
  console.log("Website loaded.");
});
