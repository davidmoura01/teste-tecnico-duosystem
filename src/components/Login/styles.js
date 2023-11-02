import styled from 'styled-components'

import LoginImg from '../../assets/hallowen.png'


export const Container = styled.div`
background-color: pink;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background: url('${LoginImg}');

`

export const Form = styled.div`
width: 300px;
background-color: black;
display: flex;
flex-direction: column;
border-radius: 15px;
border: 4px solid purple;
`

export const H2 = styled.h2`
color: white;
padding-left: 20px;
padding-top: 20px;
padding-bottom: 20px;
`
export const Label = styled.label`
color: white;
margin-top: 20px;
margin-bottom:5px;
font-size: 15px;
margin-left: 10px;
`

export const Input = styled.input`
width: 255px;
height: 25px;
margin-left: 10px ;
margin-bottom: 20px;
border-radius: 5px;
border: 2px solid purple;
padding-left: 5px;
`

export const Button = styled.button`
width: 120px;
height: 25px;
margin-left: 83px;
margin-bottom: 20px;
margin-top: 20px;
background-color: green;
border: none;
border-radius: 10px;
color: white;
font-weight: bold;
cursor: pointer;

&:hover{
    opacity: 0.7;
}

&:active{
    background-color: purple;
    
}
`

export const ErrorP = styled.p`
    color: red;
    margin-left: 10px;
    font-size: 12px;
    position: relative;
    top: -16px;
`


