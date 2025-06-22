import Header from './HeaderForOtherPages'
import WebsortProfile from './WebsortProfile';
import Footer from './Footer';
import {
    CareerContainer,
    TopContainer,
    DescriptionBox,
    Image,
    SubHeading,
    SubPara,
    MiddleContainerFst,
    SubContainer,
    Heading,
    InternImage,
    InternPara,
    InnerContainer,
    MiddleContainer,
    Headingg,
    Span,
    InputContainer,
    InputCard,
    Label,
    Input,Input2,Button
} from './CareersStyle.js'


const Careers=()=>{
    return(
        <CareerContainer>
            <Header />
          <TopContainer>
            <DescriptionBox>
                <SubHeading>
                    Talent wins games, but teamwork 
                   and intelligence win championships.
                </SubHeading>
                <SubPara>
                    At Websort, we bring digital ideas to life through expert web and app development, digital marketing, and UI/UX design. Based in Bangalore, we build responsive websites and mobile apps, enhance online visibility with SEO, PPC, and social media, and design user-friendly interfaces. Choose Websort for innovative, tailored digital solutions.
                </SubPara>
            </DescriptionBox>
            <Image src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750501966/careerlog_bqhxlu.png"/>

          </TopContainer>
          <MiddleContainerFst>   
              <Heading>Internship Opportunities at Websort</Heading>
            <InnerContainer>
              <SubContainer>
                  <InternImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750503011/intern1_pbcuvl.png"/>
                  <InternPara>Marketing</InternPara>
              </SubContainer>
              <SubContainer>
                  <InternImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750503027/intern2_shtunz.png"/>
                  <InternPara>App Development </InternPara>
              </SubContainer>
              <SubContainer>
                  <InternImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750503573/intern3_mryga5.png"/>
                  <InternPara>Web Development</InternPara>
              </SubContainer>
              <SubContainer>
                  <InternImage src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750503593/intern4_iyqvim.png"/>
                  <InternPara> UI UX</InternPara>
              </SubContainer>
              </InnerContainer>
          </MiddleContainerFst> 
           <MiddleContainer>
                          <Headingg><Span> Fill out the form and our team will get back to you shortly</Span></Headingg>
                          <InputContainer>
                             <InputCard>
                                <Label HtmlFor="firstName">First Name</Label>
                                <Input type="text" id="firstName"/>
                             </InputCard>
                             <InputCard>
                                <Label HtmlFor="second">Second Name</Label>
                                <Input type="text" id="Second"/>
                             </InputCard>
                             <InputCard>
                                <Label HtmlFor="email">Email address</Label>
                                <Input type="text" id="email"/>
                             </InputCard>
                             <InputCard>
                                <Label HtmlFor="phone">Phone</Label>
                                <Input type="text" id="phone"/>
                             </InputCard>
                             <InputCard>
                                <Label HtmlFor="company">Company</Label>
                                <Input type="text" id="comapany"/>
                             </InputCard>
                             <InputCard>
                                <Label HtmlFor="message">Message</Label>
                                <Input2 type="text" id="message"/>
                             </InputCard>
                             
                          </InputContainer>
                          <Button>
                              Submit
                          </Button>
                      </MiddleContainer> 
                      <WebsortProfile/>
                      <Footer/>                                                                                          
             </CareerContainer>
    )
}

export default Careers