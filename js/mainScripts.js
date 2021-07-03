const loadMoreBtn = document.getElementById("loadMoreButton");
const articles = document.getElementById("articlesList");
const field = document.getElementById("emailToSignUpField");
const submitButton = document.getElementById("emailToSignUpButton");

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_sr3fwsw', 'template_10bpogr', e.target, 'YOUR_USER_ID')
      .then((result) => {
        this.setState({isAlertVisible: true})
      }, (error) => {
        console.log(error.text);
      });
  }

submitButton.addEventListener("click", () => {
  if (field.value) {

  }
})

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