const btnViews = document.querySelectorAll(".view-article");
btnViews.forEach((btnView) => {
  btnView.addEventListener("click", () => {
    if (btnView.classList.contains("article-1")) {
      document
        .querySelector(".link-article-1")
        .setAttribute("href", "pages/article-1.html");
    } else {
      if (btnView.classList.contains("article-2")) {
        document
          .querySelector(".link-article-2")
          .setAttribute("href", "pages/article-2.html");
      } else {
        if (btnView.classList.contains("article-3")) {
          document
            .querySelector(".link-article-3")
            .setAttribute("href", "pages/article-3.html");
        } else {
          if (btnView.classList.contains("article-4")) {
            document
              .querySelector(".link-article-4")
              .setAttribute("href", "pages/article-4.html");
          } else {
            if (btnView.classList.contains("article-5")) {
              document
                .querySelector(".link-article-5")
                .setAttribute("href", "pages/article-5.html");
            } else {
              if (btnView.classList.contains("article-6")) {
                document
                  .querySelector(".link-article-6")
                  .setAttribute("href", "pages/article-6.html");
              }
            }
          }
        }
      }
    }
  });
});

const header = document.querySelector(".section-header");
const mobileButton = document.querySelector(".blog-btn-mobile-nav");
const featured = document.querySelector(".featured");
const navLinks = document.querySelector(".blog-nav-links");

mobileButton.addEventListener("click", () => {
  header.classList.toggle("mobile-main-nav");
  navLinks.classList.toggle("no-shadow");
});

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting) {
      document.body.classList.remove("blog-sticky");
    } else {
      document.body.classList.add("blog-sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  },
);

observer.observe(featured);

const allLinks = document.querySelectorAll(".nav-link");
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // e.preventDefault();
    var href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // const btnMobileNav = document.querySelector(".blog-btn-mobile-nav");
    // if (window.getComputedStyle(btnMobileNav).display === "block") {
    //   if (href === "#section-purpose") {
    //     href = "#subtitle-purpose";
    //     link.setAttribute("href", href);
    //   }
    //   if (href === "#section-focus") {
    //     href = "#subtitle-focus";
    //     link.setAttribute("href", href);
    //   }
    //   if (href === "#section-origin") {
    //     href = "#subtitle-origin";
    //     link.setAttribute("href", href);
    //   }
    // }

    header.classList.remove("mobile-main-nav");
    if (href !== "#" && href.startsWith("#")) {
      const sectionID = href;
      const sectionElement = document.querySelector(sectionID);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  });

  link.classList.toggle("nav-link-reset");
});
