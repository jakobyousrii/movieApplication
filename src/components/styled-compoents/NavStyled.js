import styled from "styled-components";


export const NavStyled = styled.nav`
    width: 100%;
    height: 100px;
    padding: 1rem 0;
    position: relative;
    background: linear-gradient(to right,${({ theme }) => theme.colors.header.bg}, royalblue);
    color: ${({ theme }) => theme.colors.header.text};
    font-weight: 600;
    font-size: 1.1rem;

    & > div ul,
    & > div {
    display: flex;
    justify-content:  space-between;
    align-items: center;
    gap: 3rem;
    z-index: 100;
}

& > div a , & > div div{
    position: relative;
    z-index: 100;
}

.active{
    font-weight: 700;
    border-bottom: 2px solid lightcoral;
    color: lightcoral;
    transition: 300ms color;
    cursor: pointer;
}
.inactive{
    font-weight: 0;
    cursor: pointer;
}

.search-icon{
    font-size: 1.2rem;
    position: relative;
    top: 0.2rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: white;
    padding: 0;
}

.search-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
}

.search-div form{
    display: flex;
    gap: .5rem;
    animation: searchAnimation 300ms forwards;
}

input{
    padding: .4rem .7rem;
    font-size: 1.1rem;
    border-radius: 5px;
    border: none;
    outline: none;
    font-weight: 500;
    opacity: .5;
}

.nav-categories{
    position: absolute;
    display: block;
    background-color: royalblue;
    gap: .5rem;
    z-index: 100;
    padding: .5rem;
    margin-top: 1rem;
    height: 350px;
    text-align: center;
    overflow-y: scroll;
    animation: categories-anime 300ms ease-in-out;
}
.nav-categories li{
    margin-bottom: .5rem;
}

@keyframes categories-anime {
    from{
        transform: translateY(20%);
        opacity: 0;
    }
    to{
        transform: translate(0);
        opacity: 1;
    }
}

@keyframes searchAnimation {
    from{
        transform: translateX(40%);
    }
    to{
        transform: translateX(0);
    }
}

@keyframes searchAnimationSmall {
    from{
        transform: translateY(30%);
    }
    to{
        transform: translateY(0);
    }
}

@keyframes hambAnimation {
    from{
        transform: translateX(50%);
    }
    to{
        transform: translateX(0);
    }
}

& > div ul li a:hover{
    border-bottom: 2px solid lightcoral;
    color: lightcoral;
    transition: 300ms color;
}

& > div ul li {
    cursor: pointer;
}
.categories-header:hover, .categories-header:active {
    border-bottom: 2px solid lightcoral;
    color: lightcoral;
    transition: 300ms color;
}

.ul-links{
animation: hambAnimation 300ms forwards;
}

.hamburger-button{
    display: block;
    font-size: 2.5rem;
    cursor: pointer;

&:hover, &:active{
    color: lightcoral;
}
@media (max-width: 700px) {
    & {
        position: relative;
        left: 50%;
        transform: translateX(-50%);;
    }
}
}

@media (max-width: 700px) {
    & {
        height: fit-content;
    
    }
    & div{
         align-items: flex-start;  
    }
    .div-links{
    display: flex;
    flex-direction: column;
}

    .ul-links{
        display: flex;
        flex-direction: column;
        margin-top: 0rem;
        gap: 1rem;
    }

.search-div{
    top: 0.5rem;
}

.search-div button{
    font-size: 1.5rem;
}
.search-div form {
    position: absolute;
    right: 0%;
    top: 206%;
    transform: translate(-50%, -50%);
    animation:  searchAnimationSmall 300ms forwards;
    background: linear-gradient(to right,#003171,royalblue);
    border-radius: 5px;
    padding-right: .5rem;
}
}

.div-links{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.search-div {
    position: relative;
    flex-direction: row;
}
`

export const Logo = styled.img`
width: 80px;
height: 80px;


`