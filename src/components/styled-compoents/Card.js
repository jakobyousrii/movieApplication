import styled from "styled-components";


export const Card = styled.div`
padding: 4rem;
font-size: 1.2rem;
width: 100%;
min-height: 500px;
clip-path: polygon(0 0, 100% 0, 100% 100%, calc(0% - 20vw) calc(100% - 5vw));
background: linear-gradient(to top left,#bd5d46,#e87e34);
display: flex;
justify-content: center;
align-items: center;

 h2{
    color: white;
    opacity: .8;
    font-size: 2.3rem;
}

@media (max-width: 1200px){
    img{
    width: 50%;
}
}
@media (max-width: 700px){
    img{
    width: 100%;
}
}
`

export const Image = styled.img`
    width: 30%;
    background: ${({bg}) => bg};
    border-radius: 200px;
`