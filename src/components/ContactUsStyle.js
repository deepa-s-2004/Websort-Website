import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100vw;
  background: #0b0014;
  overflow-x: hidden;
`;

export const TopContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750487080/contact_meoneh.png");
  width: 100vw;
  height: 814px;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media (max-width: 577px) {
    height: 190px;
    overflow-x: hidden;
  }
`;

export const InnerContainer = styled.div`
  align-self: flex-end;
  margin: 50px 60px;
`;

export const MiddleContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750487793/ContactSupport_pykx2l.png");
  background-size: cover;
  width: 100vw;
  min-height: 868px;
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const Heading = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: white;

  @media (max-width: 577px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const Span = styled.span`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 30px;
  color: white;

  @media (max-width: 577px) {
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  box-sizing: border-box;
  justify-content: center;
`;

export const InputCard = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  font-family: Montserrat, sans-serif;
  font-weight: 300;
  font-size: 30px;
  color: #d1f5ff;
  margin-bottom: 10px;

  @media (max-width: 577px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  width: 250px;
  border: none;
  border-bottom: 2px solid #e83e40;
  background: transparent;
  padding: 10px;
  color: white;
`;

export const Input2 = styled.input`
  width: 250px;
  border: 2px solid #e83e40;
  background: black;
  padding: 10px;
  color: white;
`;

export const Button = styled.button`
  width: 269px;
  height: 45px;
  border-radius: 19px;
  background: #dd5151;
  color: white;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
  align-self: center;

  @media(max-width: 577px) {
    width: 200px;
    font-size: 16px;
  }
`;

export const AddressHeading = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: white;
  text-align: center;

  @media (max-width: 577px) {
    font-size: 28px;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100vw;
  padding: 30px;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 791px;
  height: auto;
  border-radius: 10px;

  @media (max-width: 577px) {
    max-width: 90%;
    margin-bottom: 20px;
  }
`;

export const Address = styled.div`
  width: 298px;
  height:200px;
  padding: 20px;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 10px;
  margin-top: 40px;
  text-align: center;
  

  @media (max-width: 577px) {
    display:none;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  padding: 10px;
  font-size: 16px;
`;
