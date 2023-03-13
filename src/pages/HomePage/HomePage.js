import styled from "styled-components"
import ListaFilmes from "../../components/ListaFilmes"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function HomePage(props) {
    const {filme, setFilme, setNomeFilme, setFotoFilme} = props;
    return (
      
                <PageContainer>
                    Selecione o filme
            
                        <ListaFilmes filme={filme} setFilme={setFilme} setFotoFilme={setFotoFilme} setNomeFilme={setNomeFilme}/>
            
                </PageContainer>
       
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
