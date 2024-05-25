import { Link } from "react-router-dom";
import "./../../App.css";

function Header(){
    return(
        <header className="header">
            <h2>Rotas</h2>
            <div className="nav-bar">
                <Link to="/" className="nav-item">Home - </Link>
                <Link to="/Sobre" className="nav-item">Sobre - </Link>
                <Link to="/Contato" className="nav-item">Contato</Link>
            </div>
        </header>
    );
}

export default Header;