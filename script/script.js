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

// if(header.classList.contains("section-header mobile-main-nav"))  {
//   const curHref = link.getAttribute(href);
//   if(curHref === "#section-purpose") {
//     link.setAttribute("href") = "#subtitle-purpose";
//   }
//   if(curHref === "#section-focus") {
//     link.setAttribute("href") = "#subtitle-focus";
//   }
//   if(curHref === "#section-origin") {
//     link.setAttribute("href") = "#subtitle-origin";
//   }
//   alert("dito");
// }

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    const btnMobileNav = document.querySelector(".btn-mobile-nav");
    if (window.getComputedStyle(btnMobileNav).display === "block") {
      if (href === "#section-purpose") {
        href = "#subtitle-purpose";
      }

      if (href === "#section-focus") {
        href = "#subtitle-focus";
      }

      if (href === "#section-origin") {
        href = "#subtitle-origin";
      }
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionID = href;
      const sectionElement = document.querySelector(sectionID);
      sectionElement.scrollIntoView({ behavior: "smooth" });

      if (link.classList.contains("nav-link")) {
        header.classList.toggle("mobile-main-nav");
      }
    }

    link.classList.toggle("nav-link-reset");
  });
});
