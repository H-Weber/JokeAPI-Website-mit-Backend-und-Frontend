async function fetchjoke() {
  const response = await fetch(
    `http://127.0.0.1:8080/api/hello?lang=${language}`
);
  const data = await response.json();

  const jokeP = document.getElementById("jokeP");
  const jokeP2 = document.getElementById("jokeP2");

  jokeP.style.display = "block";
  if (data.type === "twopart") {
    jokeP2.style.display = "block"
    jokeP.textContent = "setup : " + data.setup;
    jokeP2.textContent =  "delivery : " + data.delivery;
  } else if (data.type === "single") {
    jokeP2.style.display = "none";
    jokeP.textContent = "joke : " + data.joke;
  }
  else {
    jokeP.textContent = data.type;
    jokeP2.style.display = "none";
  }
}
let language = "en";

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
      language = event.target.textContent.substring(0,2);
      dropdown.classList.remove("open");
    }
  });
});

