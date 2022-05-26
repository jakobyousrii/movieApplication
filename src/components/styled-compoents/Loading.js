import styled from "styled-components";

export const Loading = styled.div`
width: ${({width}) => width ? width : "30px"};
height: ${({width}) => width ? width : "30px"};
border-radius: 50px;
border: 4px solid royalblue;
border-color: transparent royalblue transparent royalblue;
animation: rotateAnim 800ms ease-out infinite;
position: ${({position}) => position ? position : "relative"};
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

@keyframes rotateAnim {
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
}
`