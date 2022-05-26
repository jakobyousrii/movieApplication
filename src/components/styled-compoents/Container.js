import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: ${({direction}) => direction || "row"};
padding: 0 2rem;
width: 1300px;
height: 100%;
max-width: 100%;
max-height: 100%;
margin: 0 auto;

@media (max-width: 700px) {
    &{
        padding: 0 .5rem;
        padding-top: .5rem;
    }
}
`