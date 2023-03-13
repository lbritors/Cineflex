import styled from "styled-components"
import Assentos from "../../components/Assentos"
import { useState } from "react";
import Formulario from "../../components/Formulario";
import Rodape from "../../components/Rodape";
import Legenda from "../../components/Legenda";

export default function SeatsPage(props) {
    const {assentos, setAssentos, selecionado, setSelecionado, nomeComprador, setNomeComprador, cpfComprador, setCpfComprador, diaSemana, hora, fotoFilme, nomeFilme} = props;
    const [idSelecionado, setIdSelecionado] = useState([]);



    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <Assentos assentos={assentos}
            setAssentos={setAssentos} 
            selecionado={selecionado} setSelecionado={setSelecionado}
            idSelecionado={idSelecionado} setIdSelecionado={setIdSelecionado}></Assentos>
            <Legenda/>
            
            <Formulario assentos={assentos} 
            setAssentos={setAssentos} 
            cpfComprador={cpfComprador} 
            setCpfComprador={setCpfComprador}
             nomeComprador={nomeComprador} 
             setNomeComprador={setNomeComprador} 
             selecionado={selecionado} 
             idSelecionado={idSelecionado}>
             </Formulario>
        

            <Rodape >
                <div>
                    <img src={fotoFilme}></img>
                </div>
                <div>
                    <p>{nomeFilme}</p>
                    <p>{diaSemana} - {hora}</p>
                </div>
            </Rodape>


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
    padding-bottom: 120px;
    padding-top: 70px;
`


