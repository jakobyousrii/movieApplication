import styled from "styled-components";


export const Flex = styled.div`

display: flex;
width: 100%;
align-items: center;
flex-direction: ${({direction})=> { 
    if(!direction){
        return "row";
    }
    else{
    return direction === "column" ? "column" : direction % 2 !== 0 ? "row-reverse" : "row";
}}};
justify-content: ${({spacing}) => spacing || "center"};
gap: ${({gap})=> gap || "0px"};
& article:nth-child(1) {
    width: ${({firstWidth}) => firstWidth ? firstWidth: "auto"};
}
& article:nth-child(2) {
    width: ${({secondWidth}) => secondWidth ? secondWidth: "auto"};
}

@media (max-width: 1100px){
    &{
        flex-direction: row;
        gap: 2rem;
        text-align: center;
    }
    & article:nth-child(1), & article:nth-child(2) {
        width: 100%;
    }
}
@media (max-width: 750px){
    flex-direction: column;
    & article:nth-child(1), & article:nth-child(2) {
        width: 100%;
    }
}
`