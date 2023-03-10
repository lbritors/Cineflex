import { useState } from "react";
import styled from "styled-components"

export default function Assento(props) {
    const {name, isAvailable, selecionado, setSelecionado, verificaSelecao, setVerificaSelecao} = props;
    
    console.log(selecionado)

    function selecionar(item) {
        if (!selecionado.includes(item)) {
            const novaSelecao = item;
            setSelecionado([...selecionado, novaSelecao]);
         
        } else {        
            const retira  = selecionado.filter( f => f !== item);
            setSelecionado(retira);
            

        }
    }
    



    

    return(
    <>
        <SeatItem isAvailable={isAvailable} selecionado={selecionado} verificaSelecao={verificaSelecao} name={name} onClick={() => selecionar(name)}>{name}</SeatItem>
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