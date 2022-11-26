import * as React from 'react';
import styled from "styled-components"

const TxtCont = styled.div`
font-size:${props=>props.sz};
color:${props=>props.cl};
`;

export default function HeadingText({
  text='Welcome',
  size='50px'
}) {
  return (
    <TxtCont sz={size} cl={color}>
      {text}
    </TxtCont>
  );
}