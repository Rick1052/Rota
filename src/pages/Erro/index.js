import { Link } from "react-router-dom";
import "./../../App.css";

function Erro(){
    return(
        <div>
            <h2>
                Ops! Parece que está página não existe. Segue algumas páginas encontradas
            </h2>
            <Link to='/' >Home</Link>
            <Link to='/Sobre' >Sobre</Link>
            <Link to='/Contato' >Contato</Link>
        </div>
    );

}

export default Erro;