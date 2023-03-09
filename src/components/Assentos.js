import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios";
import Assento from "./Assento";
import Legenda from "./Legenda";

export default function Assentos() {
    const [assentos, setAssentos] = useState([]);
    

    useEffect(() => {
        const url="https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats";
        const promise = axios.get(url);
        promise.then((res) => setAssentos(res.data.seats));
        promise.catch((err) => console.log(err.response));
    }, []);

    return(
<>
    <SeatsContainer>
        {assentos.map(a => <Assento key={a.id} isAvailable={a.isAvailable} id={a.id} name={a.name}></Assento>)}
            
    </SeatsContainer>
    <CaptionContainer>
      
        <Legenda></Legenda>
        
    </CaptionContainer>
</>
    )
}




const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
