import styled from "styled-components"
import Assentos from "../../components/Assentos"
import { useState } from "react";
import Formulario from "../../components/Formulario";
import Rodape from "../../components/Rodape";

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

            
            <Formulario assentos={assentos} setAssentos={setAssentos} cpfComprador={cpfComprador} setCpfComprador={setCpfComprador} nomeComprador={nomeComprador} setNomeComprador={setNomeComprador} selecionado={selecionado} idSelecionado={idSelecionado}></Formulario>
            <Rodape>
                <div>
                    <img src={fotoFilme}></img>
                </div>
                <div>
                    <p>{nomeFilme}</p>
                    <p>{diaSemana} - {hora}</p>
                </div>
            </Rodape>

            {/* <FooterContainer>
                <div>
                    <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster" />
                </div>
                <div>
                    <p>Tudo em todo lugar ao mesmo tempo</p>
                    <p>Sexta - 14h00</p>
                </div>
            </FooterContainer> */}

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

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid blue;         // Essa cor deve mudar
    background-color: lightblue;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`