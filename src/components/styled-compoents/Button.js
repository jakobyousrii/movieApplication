import styled from "styled-components";

export const Button = styled.button`
background-color: transparent;
border: 2px solid white;
color: white;
margin: 1rem 0;
padding: .7rem 1.2rem;
font-weight: 700;
cursor: pointer;

&:hover, &:active{
    background-color: white;
    color: black;
}
`