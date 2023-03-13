import styled from "styled-components";

const selecionado = "#1AAE9E";
const disponivel = "#C3CFD9";
const indisponivel = "#FBE192";

export default function Legenda() {
    
    return(

    <CaptionContainer>
        <CaptionItem>
            <CaptionCircle1/>
            Selecionado
        </CaptionItem>
        <CaptionItem>
            <CaptionCircle2 />
            Disponível
        </CaptionItem>
        <CaptionItem>
            <CaptionCircle3 />
            Indisponível
        </CaptionItem>
    </CaptionContainer>
); 


}


const CaptionContainer = styled.div`
    display: flex; 
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
   
`
const CaptionCircle1 = styled.div`
    border: 1px solid #0E7D71;        // Essa cor deve mudar
    background-color: #1AAE9E;   // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    
`
const CaptionCircle2 = styled.div`
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
const CaptionCircle3 = styled.div`
    border: 1px solid #F7C52B;        // Essa cor deve mudar
    background-color: #FBE192;    // Essa cor deve mudar
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