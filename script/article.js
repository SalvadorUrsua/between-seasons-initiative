const mobileButton = document.querySelector(".article-btn-mobile-nav");
const header = document.querySelector(".article-section-header");
mobileButton.addEventListener("click", () => {
  header.classList.toggle("mobile-main-nav");
});

const articleHead = document.querySelector(".article-head");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting) {
      document.body.classList.remove("article-sticky");
    } else {
      document.body.classList.add("article-sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  },
);

observer.observe(articleHead);

const allLinks = document.querySelectorAll(".nav-link");
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    var href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    header.classList.remove("mobile-main-nav");
    if (href !== "#" && href.startsWith("#")) {
      const sectionID = href;
      const sectionElement = document.querySelector(sectionID);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  });

  link.classList.toggle("nav-link-reset");
});
