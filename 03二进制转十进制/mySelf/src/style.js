import styled from "styled-components";


export const Form = styled.form `
    width:50%;
    background:radial-gradient(ellipse at center, #f2f9fe 0%, #d6f0fd 100%);
    padding:10px;
    border-radius:10px;
    border:1px solid gray;
    padding-bottom:30px;
    padding-top:0px

`

export const Filed = styled.div `
display: flex;
flex-direction: column;
`

export const BinaryText = styled.input `
    outline:none;
    width:50%;
    background:#e0f0f0;
    font-size:18px;
    padding:10px;
    border: 1px solid #a3a3a3;
    border-radius:5px  
    &:focus {
        border:1px solid orange
    }
`
export const DecimalText = styled.input `
    outline:none;
    width:50%
    background:#e0f0e0
    border: 1px solid #a3a3a3;
    font-size:18px;
    padding:10px;
    border-radius:5px  
`

export const Button = styled.button `
    width:30%
    font-size:18px;
    padding:10px;
    border-radius:5px;
    border:1px solid #a3a3a3;
    margin-left:10px;
    &:focus{
        border:1px solid red
    }
`

export const Label = styled.span `
    margin: 10px;
    font-size: 18px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;`