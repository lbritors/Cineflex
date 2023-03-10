import axios from "axios";
import { useEffect, useState } from "react"
import { Form, Link, useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function Formulario(props) {
    
    const {idSelecionado, nomeComprador, setNomeComprador, cpfComprador, setCpfComprador} = props;

    const navigate = useNavigate();
    

        function submeterForm(event) {
            event.preventDefault();
            const url = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
            const body = {ids: idSelecionado, name: nomeComprador, cpf: cpfComprador};
            const promise = axios.post(url, body);
            promise.then((res) => navigate("/sucesso"));
            promise.catch((err) => alert(err.response.data.message));
    
        }


    return( 

    <FormContainer >
        <form onSubmit={submeterForm}> 
            <label htmlFor="nomeComprador">Nome do Comprador:</label>
            <input value={nomeComprador}
            data-test="client-name"
            onChange={(e => setNomeComprador(e.target.value))}
            required id="nomeComprador" placeholder="Digite seu nome..." />

            <label htmlFor="cpfComprador">CPF do Comprador:</label>
            <input  value={cpfComprador}
            data-test="client-cpf"
            onChange={(e => setCpfComprador(e.target.value))} 
            required id="cpfComprador" placeholder="Digite seu CPF..." />

            <button data-test="book-seat-btn" type="submit">Reservar Assento(s)</button>
        </form>
    </FormContainer>
    )
    }


const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    form {
    display:flex;
    flex-direction: column;
        input {
        width: calc(100vw - 60px);
        }
        label {
        align-self: flex-start;
        }
    }
    
    
`