import Header from './HeaderForOtherPages'
import WebsortProfile from './WebsortProfile';
import Footer from './Footer';
import {
    ServiceContainer,
    TopContainer,
    Heading,
    SubContainer,
    DescriptionBox,
    Image,
    SubHeading,
    SubPara,
    MiddleContainer,
    BottomContainer
} from './ServicesStyle.js'

const Services=()=>{
    return(
        <ServiceContainer>
            <Header />
            <TopContainer>
                <Heading>Our Services</Heading>
                <SubContainer>
                    <Image src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750492942/ui_yiwrnx.jpg"/>
                   <DescriptionBox>
                      <SubHeading>
                         UI/UX Design
                      </SubHeading>
                      <SubPara>
                        We design clean, intuitive, and engaging user interfaces that enhance the overall user experience. From wireframes to final designs, our focus is on usability, consistency, and creating visually appealing digital products that users love.
                      </SubPara>
                   </DescriptionBox>
                </SubContainer>
                <SubContainer>
                   <DescriptionBox>
                      <SubHeading>
                         Web Development
                      </SubHeading>
                      <SubPara>
                        Planned and executed a digital marketing strategy including SEO, social media marketing, and content creation. Improved website traffic and engagement through targeted campaigns and regular performance tracking.
                      </SubPara>
                   </DescriptionBox>
                  <Image src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750493340/web_z29wcj.jpg"/>

                </SubContainer>
            </TopContainer>
            <MiddleContainer>
               <SubContainer>
                    <Image src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750497173/app_idma7o.jpg"/>
                   <DescriptionBox>
                      <SubHeading>
                          App Development    
                      </SubHeading>
                      <SubPara>
                        Developed a cross-platform mobile app using Flutter for Android and iOS. The app allows users to browse services, make bookings, and receive real-time updates. Designed with a clean UI and smooth navigation to ensure a seamless user experience.
                      </SubPara>
                   </DescriptionBox>
                </SubContainer>
            </MiddleContainer>
            <BottomContainer>
               <SubContainer>
                   <DescriptionBox>
                      <SubHeading>
                         Digital Marketing
                      </SubHeading>
                      <SubPara>
                        Designed and developed a responsive, SEO-optimized website using React. The site includes a modern UI, fast loading speed, and full mobile compatibility. Key features include service pages, contact form, and an easy-to-manage content structure to support client updates and user engagement.
                      </SubPara>
                   </DescriptionBox>
                  <Image src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750497358/webservice_j8zlgu.jpg"/>
                </SubContainer>
            </BottomContainer>
            <WebsortProfile />
            <Footer />
        </ServiceContainer>
    )
}

export default Services