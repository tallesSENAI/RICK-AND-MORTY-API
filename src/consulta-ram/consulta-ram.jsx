import { useEffect, useState } from "react";
import ConsultaPersonagens from "../consulta-personagens/consultaPersonagens";
import { useNavigate } from "react-router-dom";
import "./pagina.css";

function ConsultaRAM() {//
    const [personagens, setPersonagens] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        console.log('Consultar API');

        fetch('https://rickandmortyapi.com/api/character')
        .then((resposta) => {
            return resposta.json();
        })
        .then((resultadoConsulta) => {
            setPersonagens(resultadoConsulta.results);
        });
    }, []);
      
    function click(idPersonagem) {//
        navigate("/consulta-personagens/" + idPersonagem);
    }

    function pagina(numero){//

        fetch("https://rickandmortyapi.com/api/character/?page="+ numero)
        .then((resposta) => {
            return resposta.json();
        })
        .then((resultadoConsulta) => {
            setPersonagens(resultadoConsulta.results);
        });

    }

    function pegaPagina(){//
        const listaPaginas = []; //cria uma lista para armazenar as <div>
        
        for(let i = 0; i <= 42; i++){

            listaPaginas.push(<div class="page-item" onClick={()=> pagina(i)}><a class="page-link" href="#">{i}</a></div>);
            
        }
        return listaPaginas;
    }

    return <>
        {
            
           personagens.map(personagem => {
             return <>
                <h2>{personagem.name}</h2>
                <h3>{personagem.gender}</h3>
                <h2 onClick={()=> click(personagem.id)}><img src={personagem.image}/></h2>
                <br></br>
             </>
           })
        }

        <footer>
            {pegaPagina()}
        </footer>
    </>
    }//Consulta RAM 
export default ConsultaRAM;