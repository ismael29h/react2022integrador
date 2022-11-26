import { useState } from "react";
import { useEffect } from "react";
import { getListadoNoticias } from "../servicios/noticias";
import { useSearchParams } from "react-router-dom";

const Inicio = () => {
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [cantidadPaginas, setCantidadPaginas] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams();

    const buscarNoticias = async () => {
        setIsLoading(true);
        const {Search: noticia, totalResultados} = await getListadoNoticias(searchParams.get('query'), pagina);
        setNoticias(noticia);
        setCantidadPaginas(Math.ceil(parseInt(totalResultados)/10));
        setIsLoading(false);
    }

    useEffect(() => {
        if (searchParams.get('query')) {
            buscarNoticias(pagina)
        }
    }, [searchParams, pagina]);

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda });
    };

    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    }

    return (
        <h1>Probando</h1>
    )




};

export default Inicio;