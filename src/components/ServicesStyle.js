import styled from 'styled-components';

export const ServiceContainer = styled.div`
  width: 100vw;
  background: #0B0014;
  overflow-x: hidden;
`;

export const TopContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750492053/servicesfirstbg_rnps5q.jpg");
  width: 100vw;
  min-height: 1068px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  box-sizing: border-box;
`;

export const Heading = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 50px;
  text-align: center;
  color: white;

  @media(max-width: 577px) {
    font-size: 32px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 70px;
  flex-wrap: wrap;
  gap: 30px;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 633px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 522px;
  height: auto;
  border-radius: 42px;
  border: 6px solid #FFFFFF;
`;

export const SubHeading = styled.h2`
  font-family: Mukta, sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: white;
  margin-bottom: 20px;

  @media(max-width: 577px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const SubPara = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: white;
  line-height: 1.4;

  @media(max-width: 577px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const MiddleContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750496936/services2_nuyxch.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px;
  justify-content: space-around;
  width: 100vw;
  box-sizing: border-box;
  gap: 30px;
`;

export const BottomContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750497453/service3_cj3lpi.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px;
  justify-content: space-around;
  width: 100vw;
  box-sizing: border-box;
  gap: 30px;
`;
