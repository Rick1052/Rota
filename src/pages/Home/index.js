import { Link } from 'react-router-dom';
import "./../../App.css";

function Home(){
    return(
        <div>
            <h1 className='container'>Bem-vindo (a) à página HOME</h1>
            <span className='container'>Henrique Santos</span>

            <hr/>
            
            <Link to ="/produto/1" className='container'>Acessar Produto 1</Link>
        </div>
    );
}

export default Home;