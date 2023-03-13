import { useState } from "react";
import { json } from "react-router-dom";
import styled from "styled-components"
import Formulario from "./Formulario";

export default function Assento(props) {
    const {name, isAvailable, selecionado, setSelecionado, id, idSelecionado, setIdSelecionado} = props;
    
    console.log("assento", selecionado);
    console.log("id", idSelecionado);

    function selecionar(item, idItem) {
        if (!selecionado.includes(item) && isAvailable) {

            const novaSelecao =  item;
            setSelecionado([...selecionado, novaSelecao]);
            const novoIdSelecionado = idItem;
            setIdSelecionado([...idSelecionado, novoIdSelecionado])
         
        } else {        
            if(!isAvailable) {
                alert("Assento não disponível");
            }
            const retira  = selecionado.filter( f => f !== item);
            setSelecionado(retira);
            const retiraId = idSelecionado.filter(i => i !== idItem);
            setIdSelecionado(retiraId);
            
        }
    
    }
    
    return(
    <>
        <SeatItem isAvailable={isAvailable} data-test="seat" selecionado={selecionado}  name={name} onClick={() => selecionar(name, id)}>{name}</SeatItem>

    </> 
    )
}


const SeatItem = styled.div`
    border: 1px ${({isAvailable,  name, selecionado}) => isAvailable && selecionado.includes(name)? "#0E7D71" : isAvailable ? "#7B8B99" :  "#F7C52B"};      // Essa cor deve mudar
    background-color: ${({isAvailable, name, selecionado}) => isAvailable && selecionado.includes(name) ? "#1AAE9E" : isAvailable  ? "#C3CFD9" :  "#FBE192"};    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`