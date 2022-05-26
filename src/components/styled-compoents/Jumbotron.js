import styled from "styled-components";


export const JumbotronStyled = styled.div`
background: ${({ background }) => background};
display: flex;
justify-content: center;
align-items: center;
width: 100%;
color: white;
font-size: 1.3rem;
min-height: ${({ jumboHeight }) => jumboHeight};
clip-path: ${({ shape }) => shape ? "polygon(0% 0%,100% 0,100% 50%,100% 86%,0% 100%)" : "none"};

.jumbo-img{
    width: ${({ imgWidth, parentImg }) => parentImg ? imgWidth : ""};
    height: ${({ imgHeight, parentImg }) => parentImg ? imgHeight : ""};
    animation: showingOffRight 300ms ease-in forwards;
    ${({ categories }) => categories === "true" ? "background: rgba(100, 150, 250, .3); padding: 2rem 2.5rem; clip-path: polygon(5% 5%,100% 0,100% 50%,100% 86%,0% 100%); border-radius: 100px;" : ""}
}

img{
    width: ${({ imgWidth }) => imgWidth};
    height: ${({ imgHeight }) => imgHeight};
}

.jumbo-about{
    text-align: ${({ aboutPosition }) => aboutPosition || "start"};
    animation: showingOffLeft 300ms ease-in forwards;
}

p{
font-weight: 100;
font-size: 1.1rem;
}


@keyframes showingOffLeft{
    0%{
        opacity: 0;
        transform: translateX(-25%);
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes showingOffRight{
    0%{
        opacity: 0;
        transform: translateX(25%);
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
        transform: translateX(0);
    }
}
@media (max-width: 900px){
    &{
        clip-path: none;
    }
    .jumbo-img{
    width: 50%;
    ${({ categories }) => categories === "true" ? "width: 50%" : ""}
}
img{
    width: 100%;
    ${({ categories }) => categories === "true" ? "width: 100%" : ""}
}
.jumbo-about{
    font-size: 1rem;
    text-align: center;
}
}
@media (max-width: 500px) {
    .jumbo-about{
    font-size: 1rem;
    text-align: center;
}
.jumbo-img{
    width: 100%;
    ${({ categories }) => categories === "true" ? "width: 100%" : ""}
}
img{
    width: 100%;
    ${({ categories }) => categories === "true" ? "width: 100%" : ""}
}
}
`