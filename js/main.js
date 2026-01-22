// main.js

document.addEventListener("DOMContentLoaded", () => {
  loadShows();

  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", handleSearch);
  }
});

/**
 * Carga las series principales
 */
async function loadShows() {
  const container = document.getElementById("shows");
  container.innerHTML = "<p>Cargando series...</p>";

  try {
    const shows = await getShows();
    renderShows(shows.slice(0, 20)); // limitamos a 20
  } catch {
    container.innerHTML = "<p>Error al cargar las series</p>";
  }
}

/**
 * Renderiza las tarjetas
 */
function renderShows(shows) {
  const container = document.getElementById("shows");
  container.innerHTML = "";

  shows.forEach(show => {
    const article = document.createElement("article");
    article.classList.add("card");

    article.innerHTML = `
      <img src="${show.image?.medium || ""}" alt="${show.name}">
      <h3>${show.name}</h3>
      <p>${show.genres.join(", ")}</p>
      <a href="show.html?id=${show.id}">Ver detalle</a>
    `;

    container.appendChild(article);
  });
}

/**
 * Maneja la búsqueda
 */
async function handleSearch(e) {
  e.preventDefault();

  const input = document.getElementById("searchInput");
  const query = input.value.trim();

  if (!query) return;

  try {
    const results = await searchShows(query);
    const shows = results.map(result => result.show);
    renderShows(shows);
  } catch {
    document.getElementById("shows").innerHTML =
      "<p>Error en la búsqueda</p>";
  }
}
