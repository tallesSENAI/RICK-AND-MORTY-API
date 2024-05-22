import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ConsultaPersonagens(){
    const [listaPersonagens, setListaPersonagens] = useState({});

    let params = useParams();

    console.log(params);

    useEffect(() => {

        console.log('Consultar Personagens');

        fetch('https://rickandmortyapi.com/api/character/'+params.personagemId)
        .then((resposta) => {
            return resposta.json();
        })
        .then((resultadoConsulta) => {
            console.log(resultadoConsulta)
            setListaPersonagens(resultadoConsulta);
        });
    }, []);
    
    return <>
        <h3>{listaPersonagens.name}</h3>
        <h3>{listaPersonagens.status}</h3>
        <h3>{listaPersonagens.species}</h3>
        <h3>{listaPersonagens.type}</h3>
        <h3>{listaPersonagens.gender}</h3>
        <h3>{<img src={listaPersonagens.image}/>}</h3>
        <h3>{listaPersonagens.url}</h3>
        <h3>{listaPersonagens.created}</h3>
    </>
}

export default ConsultaPersonagens;