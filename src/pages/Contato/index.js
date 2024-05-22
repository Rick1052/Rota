import { Link } from 'react-router-dom';

function Contato(){
    return(
        <div>
            <h1>Página de Contato</h1>
            <span>(42) 9 99980-0333</span>

            <Link to="/home">Home</Link><br/>
            <Link to="/sobre">Sobre</Link><br/>

            <hr/>
            
            <Link to ="/produto/1">Acessar Produto 1</Link>
        </div>
    );
}

export default Contato;