import styled from "styled-components";
import { useState , useEffect } from "react";

const ButtonCont = styled.div`
display: flex;
justify-content: center;
`
const ButtonA = styled.button`
background-color: ${props=>props.bg || '#EDF3DD'}
`