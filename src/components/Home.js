import { useState} from 'react'
import Slider from "react-slick";
import Header from './Header'
import HomeProject from './HomeProject'
import { TbArrowBadgeRight } from "react-icons/tb";
import WebsortProfile from './WebsortProfile';
import Footer from './Footer';
import {
  HomeContainer,
  SubContainer,
  Heading,
  ParagraphCard,
  ButtonCard,
  Button,
  AboutContainer,
  AboutContent,
  AboutHeadings,
  Heading1,
  Heading2,
  AboutPara,
  AiAndIot,
  AiHeading,
  VectorContainer,Image,Paragraph,
  Design,SubDiv,
  DesignImage,Bulb,BulbImage,
  AchievementCard,
  AchieveHeading,
  AchievePara,
  AchieveListCards,
  MobileAchieveListCards,
  Card,
  AchieveImage,
  Linear,
  QuestionCard,
  Form,
  Label,Input,TextArea,
  SubmitButton,
  OpportunityCard,
  ExploreButton,
  MobileDesign,
  MobileBulb
} from './HomeStyle.js'

const imageArray=[
  {
    img:"https://res.cloudinary.com/dsedlicx9/image/upload/v1750526172/slide1_yx06rc.png",
    paragraph:"AI and IoT-driven products"
  },
  {
    img:"https://res.cloudinary.com/dsedlicx9/image/upload/v1750526253/slide2_yuk4p6.png",
    paragraph:"Creating a tech community hub for developers and entrepreneurs"
  },
  {
    img:"https://res.cloudinary.com/dsedlicx9/image/upload/v1750526279/Slide3_yyevgj.png",
    paragraph:"Creating a tech community hub for developers and entrepreneurs"
  }
]

const Home=()=>{
    const [imageIndex,setImage]=useState(0)

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return(
      <HomeContainer>
        <Header />
        <SubContainer>
          <Heading>
             Digitizing Ideas with Clean Code & Modern Design
          </Heading>
          <ParagraphCard>
             At Websort, we turn digital visions into reality with expert web and app development, UI/UX design, and digital marketing. Based in Bangalore, we craft responsive websites, innovative mobile apps, and drive results through SEO, PPC, and social media strategies.
          </ParagraphCard>
          <ButtonCard>
            <Button>
              Contact Us
            </Button>
            <Button>
              Know More
            </Button>
          </ButtonCard>      
        </SubContainer>
        <AboutContainer>
           <AboutContent>
              <AboutHeadings>
                 <Heading1>
                  About Us
                 </Heading1>
                 <Heading2>
                  Where Innovation Meets Execution
                 </Heading2>
              </AboutHeadings>
              <AboutHeadings>
                 <AboutPara>
                     Websort builds websites, apps, and digital marketing solutions to help you grow online. Based in Bangalore, we focus on smart design, strong tech, and real results.We specialize in web development, mobile app development, UI/UX design, and digital marketing—delivering responsive websites, high-performance Android/iOS apps, and visually engaging interfaces. Our digital marketing expertise spans SEO, PPC, social media marketing, and content creation, helping businesses grow and connect with their ideal audience.
                 </AboutPara>
                 <Button>
                   Know More
                 </Button>
              </AboutHeadings>
           </AboutContent>
        </AboutContainer>
        <HomeProject />
        <AiAndIot>
           <AiHeading>Fueling the Future with Innovation</AiHeading>
           <Image $bg={imageArray[imageIndex].img}>
            <Paragraph>{imageArray[imageIndex].paragraph}</Paragraph>
           </Image>
           <VectorContainer>
               {imageArray.map((item, index) => (
            <TbArrowBadgeRight
              key={index}
              onClick={() => setImage(index)}
              style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  margin: "0 5px",
                  color: imageIndex === index ? " #FF0004" : "#ccc",
                  transition: "color 0.3s ease"}}
            />
          ))}
           </VectorContainer>
        </AiAndIot>
        <Design>
           <SubDiv>
              <Heading>
                See Our Work in Web Design & Development
              </Heading>
              <ParagraphCard>
                We specialize in building responsive, user-friendly websites tailored to client needs. Take a look at our recent projects to see how design and functionality come together.
              </ParagraphCard>
              <Button>
                Explore more
              </Button>
           </SubDiv>
           <DesignImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750530424/lap_ixwd0f.png"/>
        </Design>
         <MobileDesign>
           <SubDiv>
              <Heading>
                See Our Work in Web Design & Development
              </Heading>
               <DesignImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750530424/lap_ixwd0f.png"/>

              <ParagraphCard>
                We specialize in building responsive, user-friendly websites tailored to client needs. Take a look at our recent projects to see how design and functionality come together.
              </ParagraphCard>
              <Button>
                Explore more
              </Button>
           </SubDiv>
        </MobileDesign>
        <Bulb>
           <SubDiv>
              <Heading>
                Why We Stand Out
              </Heading>
              <ParagraphCard>
                At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.
              </ParagraphCard>
              
           </SubDiv>
           <BulbImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750530783/bulb_jfoliz.png"/>
        </Bulb>
        <MobileBulb>
           <SubDiv>
              <Heading>
                Why We Stand Out
              </Heading>
              <BulbImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750530783/bulb_jfoliz.png"/>

              <ParagraphCard>
                At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.
              </ParagraphCard>
              
           </SubDiv>
        </MobileBulb>
        <AchievementCard>
            <AchieveHeading>One of our proudest achievements.</AchieveHeading>
            <AchievePara>
              A standout from our portfolio, this project exemplifies the quality, creativity, and performance we bring to every solution.<br/> 
              It's a true reflection of our commitment to excellence.
            </AchievePara>
            <AchieveListCards>
              <Card>
                 <AchieveImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750561668/card1_yaogpz.jpg"/>
                 <Heading>Web Development</Heading>
                 <Button>Explore more</Button>
              </Card>
              <Card>
                 <AchieveImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750497173/app_idma7o.jpg"/>
                 <Heading>App Development</Heading>
                 <Button>Explore more</Button>
              </Card>
              <Card>
                 <AchieveImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750561965/card3_ckd9qj.jpg"/>
                 <Heading> Digital Marketing</Heading>
                 <Button>Explore more</Button>
              </Card>
            </AchieveListCards>

            <MobileAchieveListCards>
              <Slider {...settings}>
                  
              <Card>
                 <AchieveImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750561668/card1_yaogpz.jpg"/>
                 <Heading>Web Development</Heading>
                 <Button>Explore more</Button>
              </Card>
              <Card>
                 <AchieveImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750497173/app_idma7o.jpg"/>
                 <Heading>App Development</Heading>
                 <Button>Explore more</Button>
              </Card>
              <Card>
                 <AchieveImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750561965/card3_ckd9qj.jpg"/>
                 <Heading> Digital Marketing</Heading>
                 <Button>Explore more</Button>
              </Card>
              </Slider>



            </MobileAchieveListCards>

        </AchievementCard>
        <Linear></Linear>
        <QuestionCard>
          <Heading>Questions? We're here to answer them!</Heading>
          <Form>
             <div>
               <Label HtmlFor="name">Name</Label>
               <Input type="text" id="name"/>
             </div>
             <div>
               <Label HtmlFor="email">Email</Label>
               <Input type="text" id="email"/>
             </div>
             <div>
               <Label HtmlFor="number">Number</Label>
               <Input type="text" id="number"/>
             </div>
             <div>
               <Label HtmlFor="message">Message</Label>
               <TextArea />
             </div>
             <SubmitButton>Submit</SubmitButton>
          </Form>

        </QuestionCard>
        <OpportunityCard>
           <Paragraph>See what opportunities await you</Paragraph>
           <ExploreButton>Explore more</ExploreButton>
        </OpportunityCard>
        <WebsortProfile/>
        <Footer/>
      </HomeContainer>
    )
}

export default Home