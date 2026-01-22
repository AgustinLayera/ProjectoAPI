// api.js
const API_BASE = "https://api.tvmaze.com";

/**
 * Obtiene una lista de series
 */
async function getShows() {
  try {
    const response = await axios.get(`${API_BASE}/shows`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las series", error);
    throw error;
  }
}

/**
 * Obtiene el detalle de una serie por ID
 */
async function getShowById(id) {
  try {
    const response = await axios.get(`${API_BASE}/shows/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el detalle", error);
    throw error;
  }
}

/**
 * Busca series por texto
 */
async function searchShows(query) {
  try {
    const response = await axios.get(
      `${API_BASE}/search/shows?q=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Error en la búsqueda", error);
    throw error;
  }
}
