document.addEventListener("DOMContentLoaded", () => {
  const projectsSection = document.querySelector("#projects");
  const projectsTitle = document.querySelector(".projects-header");

  if (!projectsSection || !projectsTitle) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        projectsTitle.classList.add("is-visible");
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(projectsSection);
});