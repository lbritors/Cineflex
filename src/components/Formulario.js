import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Formulario() {

    const [nomeComprador, setNomeComprador] = useState("");
    const [cpfComprador, setCpfComprador] = useState("");

    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
    })


    return( 

    <FormContainer onSubmit={useEffect}>
        <label htmlFor="nomeComprador">Nome do Comprador:</label>
        <input value={nomeComprador} onChange={(e => setNomeComprador(e.target.value))} required id="nomeComprador" placeholder="Digite seu nome..." />

        <label htmlFor="cpfComprador">CPF do Comprador:</label>
        <input  value={cpfComprador} onChange={(e => setCpfComprador(e.target.value))} required id="cpfComprador" placeholder="Digite seu CPF..." />

        <Link to={"/sucesso"}><button type="submit">Reservar Assento(s)</button></Link>
    </FormContainer>)
}


const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`