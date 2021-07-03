const loadMoreBtn = document.getElementById("loadMoreButton");
const articles = document.getElementById("articlesList");
let displayedArticles = 0

displayArticles()

function displayArticles() {
  if (displayedArticles < articles.children.length) {
    for (let i = displayedArticles; i < displayedArticles + 2; i++) {
      articles.children[i].style.display="block"
    }
  
    displayedArticles += 2
  }

  if (displayedArticles === articles.children.length) {
    loadMoreBtn.style.display = "none"
  }
}

if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => displayArticles());
}