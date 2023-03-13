import { Link, useParams } from "react-router-dom";
import styled from "styled-components"


export default function Sessao(props) {
    

    const { diaMes, diaSemana, horarios, setDiaSemana, setHora, setDiaMes, arrayNumber
    } = props;
    
    function salvaHora(hora) {
        setHora(hora);
        setDiaMes(diaMes);
        setDiaSemana(diaSemana);
    }  
  
    return(


    <div data-test="movie-day" >
        {diaSemana} - {diaMes}
        <ButtonsContainer>

            {horarios.map(h => 
            <Link to={`/assentos/${h.id}`} key={h.id} >
            <button data-test="showtime" onClick={() => salvaHora(h.name)}>{h.name} </button>
            </Link>
            )}
            
        </ButtonsContainer>
    </div>
    )

}



const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`