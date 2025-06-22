import styled from 'styled-components';

export const CareerContainer = styled.div`
  width: 100vw;
  background: #0B0014;
  overflow-x: hidden;
`;

export const TopContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750501505/career1_odnix9.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  gap: 40px;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 633px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 640px;
  height: auto;
  border-radius: 51px;
`;

export const SubHeading = styled.h1`
  font-family: Mukta, sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: white;

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

export const MiddleContainerFst = styled.div`
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750502184/career2_njekjf.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding: 20px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 314px;
`;

export const Heading = styled.h1`
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 35px;
  color: white;

  @media(max-width: 577px) {
    font-size: 26px;
  }
`;

export const InternImage = styled.img`
  width: 100%;
  max-width: 314px;
  height: auto;
`;

export const InternPara = styled.p`
  font-family: Montaga, serif;
  font-weight: 400;
  font-size: 25px;
  color: white;
  text-align: center;

  @media(max-width: 577px) {
    font-size: 18px;
  }
`;

export const MiddleContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750487793/ContactSupport_pykx2l.png");
  background-size: cover;
  background-position: center;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
`;

export const Headingg = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: white;

  @media(max-width: 577px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const Span = styled.span`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 30px;
  color: white;

  @media(max-width: 577px) {
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 30px 10px;
  justify-content: center;
`;

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 300px;
`;

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: #D1F5FF;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #E83E40;
  background: transparent;
  color: white;
  font-size: 16px;
  padding: 5px 0;

`;

export const Input2 = styled.input`
  width: 100%;
  border: 2px solid #E83E40;
  background: black;
  color: white;
  font-size: 16px;
  padding: 8px;
`;

export const Button = styled.button`
  width: 269px;
  height: 45px;
  border-radius: 19px;
  background: #DD5151;
  color: white;
  border: none;
  font-size: 18px;
  margin-top: 30px;
  align-self: center;

  @media(max-width: 577px) {
    width: 200px;
    font-size: 16px;
  }
`;
