import styled from "styled-components";

export const FooterWrapper = styled.div`
    height: 127px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1439px) {
        padding: 32px 0px;
        
  }
`

export const LogoMusem = styled.div`
    width: 206px;
    height: 63px;
    svg{
      width: 100%;
      height: 100%;
    }
    @media (max-width:576px) {
        width: 130px;
  }

`;

export const LogoModsen = styled.div`
    width: 164px;
    height: 59px;
    svg{
      width: 100%;
      height: 100%;
    }
    @media (max-width:576px) {
        width: 130px;
  }
`