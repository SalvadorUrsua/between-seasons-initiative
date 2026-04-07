const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

const headerCompanyName = document.querySelector(".header-company-name");

const landingPage = document.querySelector(".landing-page");

const header = document.querySelector(".section-header");

const mobileButton = document.querySelector(".btn-mobile-nav");
mobileButton.addEventListener("click", () => {
  header.classList.toggle("mobile-main-nav");
});

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
    rootMargin: "-80px",
  },
);

observer.observe(landingPage);

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionID = href;
      const sectionElement = document.querySelector(sectionID);
      sectionElement.scrollIntoView({ behavior: "smooth" });

      if (link.classList.contains("nav-link")) {
        header.classList.toggle("mobile-main-nav");
      }
    }
  });
});
