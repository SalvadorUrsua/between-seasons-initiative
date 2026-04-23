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
