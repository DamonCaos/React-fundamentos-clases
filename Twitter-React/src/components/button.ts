import styled from "styled-components";

const acentColor = 'rgb(29, 161, 242)';

const Button = styled.button<{variant?: 'primary' | 'secondary'}>`
border-color: ${acentColor};
border-width: 1px;
background-color: ${(props) => props.variant === "primary" ? acentColor : 'white'}
color: white;
padding: 10px 15px;
border-radius: 9999px;
cursor: pointer;
&:hover {
    background-color: ${(props) => props.variant === "primary" ? 'rgb(26, 145, 218)' : 'rgb(230, 236, 240)'}

}
border-style: solid;
text-align: center;
font-weight: bold;
text-color: ${(props) => props.variant === "primary" ? 'white' : acentColor}
transition: background-color 0.3s;
outline: none;
align-items: center;
`

export default Button;