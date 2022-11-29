import { LOGO } from "../../libs/constantes";
import "../../style.css"

const Header = () => {
    return (
            <header><img src={LOGO} width="60" alt="Logo de noticias" /><h4>INFORMATORIO - REACT 2022</h4></header>
    )
};

export default Header;