import {createGlobalStyle} from "styled-components";


export const Global = createGlobalStyle`

body{
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}
*{
    box-sizing: border-box;
}

ul{
    list-style-type: none;
    padding: 0;
}

p{
    opacity: .6;
}

a{
    text-decoration: none;
    color: white;
}
img{
    width: 100%;
}
small{
    display: block;
    opacity: .6;
    font-size: .8rem;
    margin: .5rem 0;
}
`