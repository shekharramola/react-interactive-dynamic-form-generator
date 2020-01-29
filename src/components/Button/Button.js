import React from "react";
import styled from "styled-components";

const CenterDiv = styled.div`
  margin: 0 auto;
  padding-bottom: 10px;
`;

const Button = styled.button`
box-sizing: border-box;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
width: 25%;
padding: 2%;
background: #43d1af;
background: ${(props) => ( props.buttonBackgroundColor ? props.buttonBackgroundColor : '#43d1af')};
border-bottom: 2px solid ${(props) => ( props.buttonBackgroundColor ? props.buttonBackgroundColor : '#43d1af')};
border-top-style: none;
border-right-style: none;
border-left-style: none;
color: border-bottom: 2px solid ${(props) => ( props.buttonColor ? props.buttonColor : '##fff')};
margin: 0 auto;
display: block;
color: white;
font-size: 18px;
margin-bottom: 3px;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;   
  }
  
  
`;


const button = props => (
  <CenterDiv>
    <Button {...props}
      disabled={props.disabled} onClick={props.clicked}> {props.children}</Button>
  </CenterDiv>
);

export default button;

