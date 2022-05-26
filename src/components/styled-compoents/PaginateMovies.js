import styled from "styled-components";

export const PaginateMovies = styled.section`
background-color: ${({theme}) => theme.colors.body.bg};
min-height: 86vh;
padding-bottom: 1rem;

.page-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: .3rem;
    background-color: white;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    width: fit-content;
    opacity: .8;
}

.page-item{
    font-weight: 600;
    color: rgba(0,0,0,.7);
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

.page-link{
    font-weight: 600;
    color: rgba(0,0,0,.7);
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    padding: .2rem .5rem;
}

.page-item:hover, .page-item:active{
    background-color: lightcoral;
}

.active{
    background-color: lightcoral;
}

@media (max-width: 1200px){
    .page-container{
        display: flex;
    width: 100%;
    ${({ categories }) => categories === "true" ? "width: 10rem" : ""}
}
}
`