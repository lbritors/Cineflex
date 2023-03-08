import { useEffect, useState } from "react";
import axios from "axios";
import Filme from "./Filme";
import styled from "styled-components";


export default function ListaFilmes() {
    const [filme, setFilme] = useState([]);
    console.log(filme);
    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(url);
        promise.then((res) => setFilme(res.data));
        promise.catch((err) => console.log(err.data.response));
    }, [])

    
    return (
        
        <ListContainer>
            {filme.map(f => <Filme foto={f.posterURL} nome={f.title} id={f.id}></Filme>)}
        </ListContainer>
        
    )    


}


const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`