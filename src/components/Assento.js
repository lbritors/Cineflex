import styled from "styled-components"

export default function Assento(props) {
    const {name, isAvailable, id} = props;
    
    return(
    <>
        <SeatItem isAvailable={isAvailable}>{name}</SeatItem>
    </> 
    )
}

const SeatItem = styled.div`
    border: 1px ${props => props.isAvailable ? "#7B8B99" : "#F7C52B"} ;      // Essa cor deve mudar
    background-color: ${props => props.isAvailable ? "#C3CFD9" : "#FBE192"};    // Essa cor deve mudar
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