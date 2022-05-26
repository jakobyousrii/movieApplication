import styled from "styled-components";

export const StyledSearch = styled.section`
width: 100%;
text-align: center;
min-height: 75vh;

.result-paragraph{
    font-size: 1.3rem;
    margin: 2.5rem 0;
}

section{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 330px;
    grid-gap: 1.4rem;
    margin: 3rem 0;
}

section article{
    color: white;
    position: relative;
    height: 100%;
}
section article div{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    transform: translate(-50%, -50%);
    padding: 1rem;
    border-radius: 20px;
    z-index: 10;
    opacity: 0;
    cursor: pointer;
}

section article h4{
    font-size: 1rem;
}
section article .single-img{
    height: 100%;
    width: 100%;
    border-radius: 20px;
    border: 4px solid rgba(0,0,0,.2);
    animation: img-fade 500ms forwards ease-in;
}

@keyframes img-fade {
    from{
        opacity: .2;
        transform: scale(.2);
    }
    75%{
        opacity: 1;
        transform: scale(1.1);
    }
    to{
        transform: scale(1);
    }
    
}

section article:hover > div {
    opacity: 1;
}

section article:hover {
    transform: scale(1.05);
}

@media (max-width: 455px) {
    section{
        grid-auto-rows: 500px;
    }
}
`