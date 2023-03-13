import { useEffect, useState } from "react";
import axios from "axios";
import Filme from "./Filme";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import Sessoes from "./Sessoes";


export default function ListaFilmes(props) {
    const {filme, setFilme, setNomeFilme, setFotoFilme} = props;

    console.log(filme);
    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
        const promise = axios.get(url);
        promise.then((res) => setFilme(res.data));
        promise.catch((err) => console.log(err.data.response));
    }, [])

    
    return (
        
            <ListContainer>
            {filme.map(f =>
            <Link to={`/sessoes/${f.id}`} key={f.id}>
                    <Filme  foto={f.posterURL} nome={f.title} id={f.id} setFotoFilme={setFotoFilme} setNomeFilme={setNomeFilme}></Filme>
            </Link>
            )}
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