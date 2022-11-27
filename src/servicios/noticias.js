const API_KEY = '3a4bc2fe11a04677b20d885746065d2d'
const OMDB_API = 'https://newsapi.org'
const PAGE_SIZE = '10'
const LANGUAGE = 'es'


export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${OMDB_API}/v2/everything?q=${criterioBusqueda}&apiKey=${API_KEY}&page=${paginaActual}&pageSize=${PAGE_SIZE}&language=${LANGUAGE}`);
    const noticias = await respuesta.json();
    return noticias;
}
