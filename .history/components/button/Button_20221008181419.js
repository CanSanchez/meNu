import styled from "styled-components";
import { useState , useEffect } from "react";

const ButtonCont = styled.div`
display: flex;
justify-content: center;
`
const ButtonA = styled.button`
background-color: ${props=>props.bg};
color: ${props=>props.color}
width: 200px;
height: 46px;
border: 1px solid #434343;
border-radius: 50px;
font-family: 'Poppins', sans-serif;
font-size: 17px;
box-shadow: 0px 2px 3px #888888;
`

export default function Button({
    labeltxt='Yes',
    bg=
    onClick=()=>{}
})

return <ButtonCont>
    <ButtonA
    
    ></ButtonA>
</ButtonCont>