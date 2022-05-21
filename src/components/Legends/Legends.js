


import styled from "styled-components"



const objLegends = [
    { type: "Selecionado" },
    { type: "Disponível" },
    { type: "Indisponível" }
]

//função que renderiza uma legenda
function Legend({ type }) {
    return (
        <OptionClass >
            <LegendClass
                backgroundColor={
                    type === "Selecionado" ? '#8DD7CF' : type === "Disponível" ? '#C3CFD9' : '#FBE192'}
                borderColor={
                    type === "Selecionado" ? '#1AAE9E' : type === "Disponível" ? '#7B8B99' : '#F7C52B'}>
            </LegendClass>
            <p>{type}</p>
        </OptionClass >
    )
}


//função que renderiza as legendas
export default function Legends() {
    return (

        <LegendsClass >
            {objLegends.map((e, index) => <Legend key={index} type={e.type} />)}
        </LegendsClass>
    )
}



const LegendsClass = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 45px;
    margin-top: -24px;
    margin-bottom: 40px;
    font-size: 13px;

`
const OptionClass = styled.div`
 display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`




const LegendClass = styled.div`

    border-radius: 17px;
    width: 25px;
    height: 25px;   
    background-color: ${props => props.backgroundColor};
    border-width: 3px;
    border: 1px solid ${props => props.borderColor};
    
`;
