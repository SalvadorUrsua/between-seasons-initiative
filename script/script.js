const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

const headerCompanyName = document.querySelector(".header-company-name");

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    } else {
      document.body.classList.add("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    // rootMargin: "-1px",
  },
);

observer.observe(sectionHero);
