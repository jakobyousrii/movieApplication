import styled from "styled-components";


export const StyledShow = styled.section`

background: ${({theme, background})=> background ? `url(https://image.tmdb.org/t/p/original/${background})`:theme.colors.body.bg};
background-repeat: no-repeat;
background-size: cover;
color: ${({theme}) => theme.colors.body.text};
min-height: 86vh;
display: flex;
justify-content: center;
align-items: center;

& .star{
    color: yellow;
    font-size: 1.1rem;
    font-weight: 700;
}

.img-article{
    padding: 2rem 0;
}

img{
    border: 2px solid white;
    border-radius: 20px;
}

.article-about{
    background: rgba(0,0,0,.7);
    padding: 2rem;
    border-radius: 10px;
    margin: 1rem 0;
}
.article-about h2{
    font-size: 2.4rem;
    margin: 1rem 0;
}
`