import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom"
import styled from "styled-components"
import Sessoes from "./Sessoes"


export default function Filme(props) {

const {foto, nome, id, setNomeFilme, setFotoFilme} = props;


 function guardaValor() {
    setNomeFilme(nome);
    setFotoFilme(foto);

 }

return (
        
            <MovieContainer onClick={guardaValor}> 
                <img  src={foto} alt={nome} key={id} data-test="movie"></img>
            </MovieContainer>
        
  
)

}

const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`