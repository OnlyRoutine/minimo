const loadMoreBtn = document.getElementById("loadMoreButton");

const articles = document.getElementById("articlesList");
console.log(articles)
for (let i = 0; i < 2; i++) {
  console.log(articles.children[i].tagName);
}

if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => console.log("Clicked"));
}