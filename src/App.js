import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { useState } from "react"

export default function App() {
    const [assentos, setAssentos] = useState([]);
    const [filme, setFilme] = useState([]);
    const [sessao, setSessao] = useState([]);
    const [selecionado, setSelecionado] = useState([]);
    const [nomeComprador, setNomeComprador] = useState("");
    const [cpfComprador, setCpfComprador] = useState("");
    const [nomeFilme, setNomeFilme] = useState("");
    const [fotoFilme, setFotoFilme] = useState("");
    const [diaSemana, setDiaSemana] = useState("");
    const [diaMes, setDiaMes] = useState("");
    const [hora, setHora] = useState("");







    return (
        <>
           <NavContainer>CINEFLEX</NavContainer>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage filme={filme} setFilme={setFilme} setFotoFilme={setFotoFilme} setNomeFilme={setNomeFilme}/>}></Route>
                    <Route path="/sessoes/:idFilme" element={<SessionsPage setDiaSemana={setDiaSemana} setDiaMes={setDiaMes}  setHora={setHora} sessao={sessao} setSessao={setSessao} nomeFilme={nomeFilme} fotoFilme={fotoFilme}/>}></Route>
                    <Route path="/assentos/:idSessao" element={<SeatsPage diaSemana={diaSemana} hora={hora} nomeFilme={nomeFilme} fotoFilme={fotoFilme} cpfComprador={cpfComprador} setCpfComprador={setCpfComprador} nomeComprador={nomeComprador} setNomeComprador={setNomeComprador} assentos={assentos} setAssentos={setAssentos} selecionado={selecionado} setSelecionado={setSelecionado} />}></Route> 
                    <Route path="/sucesso" element={<SuccessPage  hora={hora} filme={filme} dia={diaMes} nomeComprador={nomeComprador} cpfComprador={cpfComprador} selecionado={selecionado}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
