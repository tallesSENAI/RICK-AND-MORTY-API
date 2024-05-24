import { useEffect, useState } from "react";
import ConsultaPersonagens from "../consulta-personagens/consultaPersonagens";
import { useNavigate } from "react-router-dom";

function ConsultaRAM() {
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
      
        function click(idPersonagem) {
          navigate("/consulta-personagens/" + idPersonagem);
        }

    return <>
        {
           personagens.map(personagem => {
             return <>
                <h2>{personagem.name}</h2>
                <h2>{personagem.gender}</h2>
                <h2 onClick={()=> click(personagem.id)}><img src={personagem.image}/></h2>
             </>
           })
        }
    </>
    } 
export default ConsultaRAM;