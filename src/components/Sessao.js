import { Link, useParams } from "react-router-dom";
import styled from "styled-components"


export default function Sessao(props) {

    const { diaMes, diaSemana, horarios, setDiaSemana, setHora, setDiaMes} = props;
    function salvaDiaHora(hora) {
        setDiaSemana(diaSemana);
        setHora(hora);
        setDiaMes(diaMes);
    }  
    
  
    return(


    <>
        {diaSemana} - {diaMes}
        <ButtonsContainer>

            {horarios.map(h => 
            <Link to={`/assentos/${h.id}`} key={h.id}>
            <button onClick={() => salvaDiaHora(h.name)}>{h.name} </button>
            </Link>
            )}
            
        </ButtonsContainer>
    </>
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