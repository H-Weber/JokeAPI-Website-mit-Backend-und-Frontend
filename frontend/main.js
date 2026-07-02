async function fetchjoke() {
  const response = await fetch("/api/hello");
  const data = await response.json();
  const jokeP = document.getElementById("jokeP");
  const jokeP2 = document.getElementById("jokeP2");
  jokeP.style.display = "block";
  if (data.twopart === true) {
    jokeP2.style.display = "block";
    jokeP.textContent = data.setup;
    jokeP2.textContent = data.delivery;
  } else {
    jokeP2.style.display = "none";
    jokeP.textContent = data.joke;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const toggleButton = document.querySelector(".dropdown-toggle");
  const menu = document.querySelector(".dropdown-menu");

  toggleButton.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });

  menu.addEventListener("click", (event) => {
    if (event.target.classList.contains("item")) {
      toggleButton.textContent = event.target.textContent;
      dropdown.classList.remove("open");
    }
  });
});
