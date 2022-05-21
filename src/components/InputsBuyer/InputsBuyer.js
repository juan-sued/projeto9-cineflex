
import React from "react";
import styled from "styled-components"




export default function InputsBuyer() {
    const [inputValueName, setInputValueName] = React.useState('');

    const [inputValueCpf, setInputValueCpf] = React.useState('');


    const [objUserBuyer, setObjUserBuyer] = React.useState([
        {
            name: inputValueName, cpf: inputValueCpf
        }
    ]);


    function onChange(e) {

        const inputBuyer = e.target.value

        console.log(e)
        console.log(inputBuyer)

        if (inputBuyer.length === 10) {
            setInputValueName(inputBuyer);
            const newObjUserBuyer = [...objUserBuyer]
            setObjUserBuyer(newObjUserBuyer);

        } else if (inputBuyer.length > 0 && inputBuyer.length < 10) {
            setInputValueCpf(inputBuyer);
            const newObjUserBuyer = [...objUserBuyer]
            setObjUserBuyer(newObjUserBuyer);

        }


    }

    console.log(objUserBuyer)

    return (


        <InputsBuyerClass>
            <InputNameBuyer>
                <h4>Nome do comprador:</h4>
                <input placeholder="Digite seu nome..." value={inputValueName} onChange={(e) => onChange(e)} ></input>
            </InputNameBuyer>
            <InputCpfBuyer>
                <h4>CPF do comprador:</h4>
                <input placeholder="Digite seu CPF..." value={inputValueCpf} onChange={(e) => onChange(e)} ></input>
            </InputCpfBuyer>


        </InputsBuyerClass>
    )
}


const InputsBuyerClass = styled.div`

height: 180px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
font-size: 18px;


h4 {
    line-height: 21px;
    margin-bottom: 4px;
}

 input {
    font-size: 18px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    width: 350px;
    height: 51px;
    font-style: italic;
}

`;


const InputNameBuyer = styled.div`

`;

const InputCpfBuyer = styled.div`

`;


