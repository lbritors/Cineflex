import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Sessao from "./Sessao";
import { Link, useParams } from "react-router-dom";

export default function Sessoes(props) {
    const {sessao, setSessao, setDiaSemana, setHora, setDiaMes} = props;
    
   
   const {idFilme} = useParams();
   
  
    useEffect(() => {
        const url= `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
        const promise = axios.get(url);
        promise.then((res) => setSessao(res.data.days));
        promise.catch((err) => console.log(err.response.data));
    }, []);
 
    return(
        <SessionContainer>
            {sessao.map(s => 
               
                <Sessao 
                 id={s.id} key={s.id} diaMes={s.date} diaSemana={s.weekday} arrayNumber={s} horarios={s.showtimes} setDiaSemana={setDiaSemana} setHora={setHora} setDiaMes={setDiaMes}>
                </Sessao>
            )}
        </SessionContainer>
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`