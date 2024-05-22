import { Link } from 'react-router-dom';

function Sobre(){
    return(
        <div>
            <h1>Página Sobre a empresa</h1>
            <span>PORTERITE</span>

            <Link to="/home">Home</Link><br/>
            <Link to="/contato">Contato</Link><br/>

            <hr/>
            
            <Link to ="/produto/1">Acessar Produto 1</Link>
        </div>
    );
}

export default Sobre;