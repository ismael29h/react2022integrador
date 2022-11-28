import { Container } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getListadoNoticias } from "../servicios/noticias";
import { useSearchParams } from "react-router-dom";
import Loading from "../componentes/Loading/loading";
import Buscador from "../componentes/Buscador/Buscador";
import { ListaNoticias } from "../componentes/Noticia/Noticia";
import Paginador from "../componentes/Paginador/Paginador";

const Inicio = () => {
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [pagina, setPagina] = useState(1);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalResultado, setTotalResultado] = useState(0);

    const buscarNoticias = async (pagina) => {
        setIsLoading(true);        
        const {Search: status, articles, totalResults} = await getListadoNoticias(searchParams.get('query'), pagina);
        setNoticias(articles);
        setTotalResultado(totalResults)
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10));
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
        <Container maxWidth='sm'>
            <Buscador onBuscar={onBuscar}/>
            { isLoading && <Loading /> }
            { noticias && <h3>Se han encontrado un total de {totalResultado} noticias relacionadas con "{searchParams.get('query')}"</h3> }
            { noticias && <ListaNoticias noticias={noticias} /> }
            { noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} /> }
        </Container>
    )




};

export default Inicio;