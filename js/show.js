// show.js

document.addEventListener("DOMContentLoaded", loadShowDetail);

/**
 * Carga el detalle de la serie
 */
async function loadShowDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) return;

  try {
    const show = await getShowById(id);
    renderShow(show);
  } catch {
    document.body.innerHTML = "<p>Error al cargar la serie</p>";
  }
}

/**
 * Renderiza la info de la serie
 */
function renderShow(show) {
  const container = document.getElementById("showDetail");

  container.innerHTML = `
    <h1>${show.name}</h1>
    <img src="${show.image?.original || ""}" alt="${show.name}">
    <p>${show.summary || "Sin descripción"}</p>
    <p><strong>Géneros:</strong> ${show.genres.join(", ")}</p>
    <p><strong>Rating:</strong> ${show.rating.average || "N/A"}</p>
    <a href="index.html">Volver</a>
  `;
}
