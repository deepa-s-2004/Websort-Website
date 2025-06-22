import styled from 'styled-components';
import { VscDebugContinueSmall } from "react-icons/vsc";
import { FaBarsStaggered } from "react-icons/fa6";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 108px;
  background: #DAE5FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 226px;
  height: 63px;
`;

export const NavigationOptions = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
    color: black;
  }
`;

export const StyledIcon = styled(VscDebugContinueSmall)`
  color: white;
  font-size: 20px;
  background-color: #0021F5;
  padding: 4px;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  margin-top: 10px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-around;
  width: 800px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 40px;
  border-radius: 14px;
  background: #212062;
  color: white;
  font-family: Inter, sans-serif;
  font-size: 18px;
  border: none;
`;

export const BarIcon = styled(FaBarsStaggered)`
  display: none;

  @media (max-width: 576px) {
    display: block;
    font-size: 32px;
    cursor: pointer;
    color: #212062;
    margin-right: 30px;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  background: #1E2755D1;
  padding: 20px;
  z-index: 999;
  width: 294;
  height: 349px;
  top: 157px;
  left: 214px;
  border-radius: 42px;


  a {
    text-decoration: none;
    color: white;
    margin-bottom: 10px;
  }


  @media (min-width: 577px) {
    display: none;
  }
`;
