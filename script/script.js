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

    const btnMobileNav = document.querySelector(".btn-mobile-nav");
    if (window.getComputedStyle(btnMobileNav).display === "block") {
      if (href === "#section-purpose") {
        href = "#subtitle-purpose";
        link.setAttribute("href", href);
      }
      if (href === "#section-focus") {
        href = "#subtitle-focus";
        link.setAttribute("href", href);
      }
      if (href === "#section-origin") {
        href = "#subtitle-origin";
        link.setAttribute("href", href);
      }
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionID = href;
      const sectionElement = document.querySelector(sectionID);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    header.classList.remove("mobile-main-nav");
    link.classList.toggle("nav-link-reset");
  });
});

const form = document.getElementById("contact-form");
const googleScriptURL =
  "https://script.google.com/macros/s/AKfycby4VR17dEtyGesdWWdO6HZShm8Ye_giN3N0jrB35feDBlYtwnUmkpoNBpSMqrQqBuiX/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    fullname: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    country: form.country.value,
    message: form.message.value,
  };

  await fetch(googleScriptURL, {
    method: "POST",
    body: JSON.stringify(formData),
  });

  alert("Submitted!");
  form.reset();
});

// import countries from "https://cdn.jsdelivr.net/npm/world-countries@4.0.0/countries.json";

// const select = document.getElementById("country");

// countries
//   .map((c) => c.name.common)
//   .sort()
//   .forEach((name) => {
//     const option = document.createElement("option");
//     option.value = name;
//     option.textContent = name;
//     select.appendChild(option);
//   });
