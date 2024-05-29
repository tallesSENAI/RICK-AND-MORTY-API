import { useParams } from "react-router-dom";

function MostraEpisodio(){
    const params = useParams();

    useEffect(() => {

        console.log('Consultar API');

        fetch('https://rickandmortyapi.com/api/episode'+ params.episodioId)
        .then((resposta) => {
            return resposta.json();
        })
        .then((resultadoConsulta) => {
            setPersonagens(resultadoConsulta.results);
        });
    }, []);
}

export default MostraEpisodio;