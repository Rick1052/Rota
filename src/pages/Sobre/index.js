import { Link } from 'react-router-dom';
import "./../../App.css";

function Sobre(){
    return(
        <div>
            <h1 className='container'>Página Sobre a empresa</h1>
            <span className='container'>PORTERITE</span>

            <hr/>
            
            <Link to ="/produto/1" className='container'>Acessar Produto 1</Link>
        </div>
    );
}

export default Sobre;