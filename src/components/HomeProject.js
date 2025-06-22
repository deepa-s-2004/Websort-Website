import Slider from 'react-slick';
import {
  HomeProjectContainer,
  ProjectHeading,
  CarouselWrapper,
  CarouselHeading,
  CarouselImage,
  CarouselItem,
} from './HomeStyle.js';

const carouselData = [
  {
    heading: 'App Development',
    image: 'https://res.cloudinary.com/dsedlicx9/image/upload/v1750497173/app_idma7o.jpg',
  },
  {
    heading: 'UI/UX Design',
    image: 'https://res.cloudinary.com/dsedlicx9/image/upload/v1750492942/ui_yiwrnx.jpg',
  },
  {
    heading: 'Web Development',
    image: 'https://res.cloudinary.com/dsedlicx9/image/upload/v1750493340/web_z29wcj.jpg',
  },
]

const HomeProject = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
};


  return (
    <HomeProjectContainer>
      <ProjectHeading>Our Project</ProjectHeading>
      <CarouselWrapper>
          <Slider {...settings}>
            {carouselData.map((item, index) => (
              <CarouselItem key={index}>
                <CarouselImage src={item.image} alt={item.heading} />
                <CarouselHeading>{item.heading}</CarouselHeading>
              </CarouselItem>
            ))}
          </Slider>
        </CarouselWrapper>
    </HomeProjectContainer>
  );
};

export default HomeProject;
