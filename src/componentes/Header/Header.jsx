import { LOGO } from "../../libs/constantes";
import "../../style.css"

const Header = () => {
    return (
        <div>
            <header><img src={LOGO} width="50" alt="Logo de noticias" /></header>
        </div>
    )
};

export default Header;