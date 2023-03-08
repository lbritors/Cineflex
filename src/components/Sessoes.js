import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import Sessao from "./Sessao";

export default function Sessoes() {
   const [sessao, setSessao] = useState([]);
  console.log(sessao);
    useEffect(() => {
        const url= "https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes";
        const promise = axios.get(url);
        promise.then((res) => setSessao(res.data.days));
        promise.catch((err) => console.log(err.response.data));
    }, []);
 
    return(
    <SessionContainer>
        {sessao.map(s => <Sessao  key={s.id} id={s.id} diaMes={s.date} diaSemana={s.weekday} horarios={s.showtimes}></Sessao>)}
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