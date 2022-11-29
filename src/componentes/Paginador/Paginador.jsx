import { Pagination } from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onChange
}) => {
    const cambiaPagina = (evento, pagina) => {
        onChange(pagina);
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
    };

    return (
        <Pagination
            count={cantidadPaginas}
            color="secondary"
            onChange={cambiaPagina}
        />
    );
}

export default Paginador;
