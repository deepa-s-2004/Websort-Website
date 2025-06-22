import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100vw;
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750485255/websortProfile_m2vtef.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 50px;
  box-sizing: border-box;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    
    gap: 30px;
  }
`;

export const ProfileContentLeft = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProfileContentRight = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const Image = styled.img`
  width: 226px;
  height: 63px;
`;

export const Paragraph = styled.p`
  font-family: Mandali, sans-serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 130%;
`;

export const LogosContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  cursor: pointer;
`;
