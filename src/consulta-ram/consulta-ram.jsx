import { useEffect, useState } from "react";

function ConsultaRAM() {
    const [personagens, setPersonagens] = useState([]);

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

    return <>
        {
           personagens.map(personagem => {
             return <>
                <h2>{personagem.name}</h2>
                <h2>{personagem.gender}</h2>
                <h2>{<img src={personagem.image}/>}</h2>
             </>
           })
        }
    </>
}

export default ConsultaRAM;