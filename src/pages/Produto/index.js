import { useParams } from "react-router-dom";
import "./../../App.css";

function Produto(){
    const {id} = useParams();

    return(
        <div>
            <h2 className='container'>Página de Detalhes</h2>

            <span className='container'>
                Meu produto é {id}
            </span>
        </div>
    );
}

export default Produto;