import styled from "styled-components";

export const FooterComp = styled.footer`
  width: 100%;
  height: 5rem; 
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  bottom: 0;

small{
    margin: 0;
    text-align: center;
    font-size: .7rem;
}

.yousri{
  font-size: .9rem;
}
.all-rights{
border-left: 3px solid lightcoral;
padding: 1rem;
}

.logo-name{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:0;
}

.footer-logo{
  height: 1.3rem;
  font-size: 2rem !important;
  fill: lightcoral;
}
`