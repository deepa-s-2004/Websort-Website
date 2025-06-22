import styled from 'styled-components';

export const ProjectContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750504526/projectbg_ai0vml.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 900px;
  padding: 80px 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Heading = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 50px;
  color: white;
  text-align: center;
  margin-bottom: 60px;
`;

export const CarouselWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
 
  

  .slick-slide {
    transform: scale(0.8);
    opacity: 0.5;
    transition: all 0.4s ease;
    display: flex !important;
    justify-content: center;
  }

  .slick-center {
    transform: scale(1.1);
    opacity: 1;
    z-index: 2;
  }

  .slick-dots li button:before {
    color: #fff;
    opacity: 0.5;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
  }
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CarouselImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: 450px;
  border: 5px solid white;
  border-radius: 30px;
  object-fit: cover;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    max-width: 90%;
    height: auto;
  }
`;

export const CarouselHeading = styled.h2`
  margin-top: 20px;
  font-size: 22px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;
