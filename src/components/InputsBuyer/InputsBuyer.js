
import React from "react";
import styled from "styled-components"
import axios from "axios";

import { Link } from "react-router-dom";


export default function InputsBuyer() {



    // function onChange(e) {

    //     const inputBuyer = e.target.value



    //     if (inputBuyer.length === 11) {
    //         setInputValueName(inputBuyer);

    //         ssetObjUserBuyer([...objUserBuyer]);

    //     } else if (inputBuyer.length > 0 && inputBuyer.length < 10) {
    //         setInputValueCpf(inputBuyer);

    //         setObjUserBuyer([...objUserBuyer]);

    //     }
    // }


    const [inputValueName, setInputValueName] = React.useState('');

    const [inputValueCpf, setInputValueCpf] = React.useState('');


    const [objUserBuyer, setObjUserBuyer] = React.useState(
        {
            ids: [],
            name: "",
            cpf: ""
        }
    );








    //função que impede que o navegador realize o reaload 
    function submitData(event) {
        event.preventDefault();
        // aqui vai a requisição da api

        objUserBuyer.name = inputValueName
        objUserBuyer.cpf = inputValueCpf

        const newobjUserBuyer = { ...objUserBuyer }
        setObjUserBuyer(newobjUserBuyer)



        console.log("meu object é:", objUserBuyer)


        console.log("enviado com sucesso");
        setInputValueCpf('');
        setInputValueCpf('');

    }


    if (objUserBuyer.name === '') {


    }



    return (

        <form onSubmit={submitData}>

            <InputsBuyerClass>
                <InputNameBuyer>
                    <h4 forhtml="formName">Nome do comprador:</h4>
                    <input id="formName" name="name" placeholder="Digite seu nome..." value={inputValueName} pattern={"[A-Za-z' ']+"} onChange={e => setInputValueName(e.target.value)} required  ></input>
                </InputNameBuyer>
                <InputCpfBuyer>
                    <h4 forhtml="formCPF">CPF do comprador:</h4>
                    <input id="formCPF" name="cpf" placeholder="Digite seu CPF..." value={inputValueCpf} pattern={"[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}"} onChange={e => setInputValueCpf(e.target.value)} required  ></input>
                </InputCpfBuyer>
            </InputsBuyerClass>

            <Container>

                <ButtonOrangeClass margin={30} type="submit" >
                    Reservar assentos
                </ButtonOrangeClass>

            </Container>

        </form>

    )
}








const Container = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;



`;


const ButtonOrangeClass = styled.button`

     margin-top:${props => props.margin}px;
     width: 225px;
     height: 42px;
     background: #E8833A;
     border-radius: 3px;
     border: none;
     font-family: 'Roboto';
     font-style: normal;
     font-weight: 400;
     font-size: 18px;
     display: flex;
     justify-content: center;
     align-items: center;
     letter-spacing: 0.04em;
     color: white;
    
 



`;



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


