import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios";
import Assento from "./Assento";
import Legenda from "./Legenda";
import { useParams } from "react-router-dom";

export default function Assentos(props) {
    const {assentos, setAssentos, selecionado, setSelecionado, idSelecionado, setIdSelecionado} = props;
    const {idSessao} = useParams();
    

    useEffect(() => {
        const url=`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
        const promise = axios.get(url);
        promise.then((res) => setAssentos(res.data.seats));
        promise.catch((err) => console.log(err.response));
    }, []);

    return(
<>
    <SeatsContainer>
        
        {assentos.map(a => <Assento key={a.id} selecionado={selecionado}  setSelecionado={setSelecionado} idSelecionado={idSelecionado} setIdSelecionado={setIdSelecionado} isAvailable={a.isAvailable} id={a.id} name={a.name}></Assento>)}
           
    </SeatsContainer>
   
   
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

