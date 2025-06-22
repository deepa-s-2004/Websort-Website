import Header from './HeaderForOtherPages';
import WebsortProfile from './WebsortProfile';
import Footer from './Footer';
import {
    ContactContainer,
    TopContainer,
    InnerContainer,
    MiddleContainer,
    Heading,
    Span,
    InputContainer,
    InputCard,
    Label,Input,Input2,Button,
    AddressHeading,
    AddressContainer,
    Image,
    Address,
    Paragraph,
} from './ContactUsStyle.js'

const Contact=()=>{
    return(
       
            
           <ContactContainer>
            <Header/>
            <TopContainer>
                <InnerContainer>
                    <h1>Contact Us</h1>
                    <p>Have a question, idea, or project in mind? <br/>
                    We're here to help — get in touch with us <br/> 
                    today.</p>
                </InnerContainer>
            </TopContainer>
            <MiddleContainer>
                <Heading>Need support or want to collaborate?<br/><Span> Fill out the form and our team will get back to you shortly</Span></Heading>
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
            <AddressHeading>Address</AddressHeading>
            <AddressContainer>
            <Image src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750490502/address_idzyjr.png"/>
            <Address>
                <Paragraph>Based in Bangalore | <br/> contact@websort.com <br/>+91-XXXXXXXXXX</Paragraph>
            </Address>
            </AddressContainer>
            <WebsortProfile />
            <Footer />
        </ContactContainer>
       
    )
}

export default Contact