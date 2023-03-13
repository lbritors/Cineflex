import { useParams } from "react-router-dom"
import styled from "styled-components"
import Rodape from "../../components/Rodape";
import Sessoes from "../../components/Sessoes"

export default function SessionsPage(props) {
  const {sessao, setSessao, nomeFilme, fotoFilme, setDiaSemana, setHora, setDiaMes} = props;

    return (
        <PageContainer>
            Selecione o horário
            <div>
                <Sessoes sessao={sessao} setSessao={setSessao} setDiaSemana={setDiaSemana} setHora={setHora} setDiaMes={setDiaMes}></Sessoes>
            </div>

            <Rodape>
                <div>
                    <img src={fotoFilme}></img>
                </div>
                <div>
                   <p> {nomeFilme}</p>
                </div>
            </Rodape>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    align-items: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`

