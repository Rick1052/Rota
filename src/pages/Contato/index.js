import { Link } from 'react-router-dom';
import "./../../App.css";

function Contato(){
    return(
        <div className='body'>
            <h1 className='container'>Página de Contato</h1>
            <span className='container'>(42) 9 99980-0333</span>

            <hr/>
            
            <Link to ="/produto/1" className='container'>Acessar Produto 1</Link>
        </div>
    );
}

export default Contato;