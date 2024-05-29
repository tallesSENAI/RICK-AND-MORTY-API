
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


    function mostrarEpisodio(episodioLink) {//
        const episodioId = episodioLink.split('https://rickandmortyapi.com/api/episode')
        navigate("/mostra-episodio/" + episodioLink);
    }

    return <>
        <h3>Name: {listaPersonagens.name}</h3>
        <h3>{<img src={listaPersonagens.image}/>}</h3>
        <h3>Status: {listaPersonagens.status}</h3>
        <h3>Species: {listaPersonagens.species}</h3>
        <h3>Gender: {listaPersonagens.gender}</h3>
        <h3>URL: {listaPersonagens.url}</h3>
        <h3>Created in: {listaPersonagens.created}</h3>

        {
            listaPersonagens.episode && listaPersonagens.episode.map(episodios => {
                return <h3>Episodes that it makes its appearence: <a onClick={mostrarEpisodio} class="page-link" href="#">{episodios}</a></h3>
            })
        }
    </>
}

export default ConsultaPersonagens;