import { useParams } from "react-router-dom";
import styled from "styled-components"

export default function Sessao(props) {

    const { diaMes, diaSemana, horarios} = props;
    
  
    return(


    <>
        {diaSemana} - {diaMes}
        <ButtonsContainer>

            {horarios.map(h => <button key={h.id}>{h.name}</button>)}
           
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