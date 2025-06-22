import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 6251px; 
  overflow: hidden;

  @media(max-width:577px){
    height: 4851px; 
  }
`;

export const SubContainer=styled.div`
   width: 100vw;
   height: 764px;
   top: -156px;
   
   background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750401336/Home_bg_image_umoaw8.png");
   background-size: cover;
   
   margin-top: 0;
   box-sizing: border-box;
   padding: 10%;
   display: flex;
   flex-direction: column;
   justify-content: center;

   @media (max-width: 577px){
     padding:30px;
     height: 464px;
   }
`;

export const Heading=styled.h1`
   font-family: "Montserrat";
   font-weight: 400;
   font-size: 50px;
   line-height: 100%;
   letter-spacing: 0%;
   color: white;
   width: 672px;
   top: 178px;
   left: 190px;
   margin: 0;

   @media (max-width: 577px){
    font-size: 25px;
    width: 328px;
    height:auto;
    top: 222px;
    left: 63px;

   }
`;

export const ParagraphCard=styled.p`
   width: 521px;
   left: 196px;
   font-family: Fustat;
   font-weight: 400;
   font-size: 17px;
   line-height: 100%;
   letter-spacing: 0%;
   color: #FFFFFF;

   @media (max-width:577px){
      width: 348px;
      height: 139px;
      top: 411px;
      left: 43px;
      font-size: 15px;
}
`;

export const ButtonCard=styled.div`
   display: flex;
`;

export const Button=styled.button`
   width: 121px;
   height: 32px;
   top: 512px;
   left: 329px;
   border-width: 1px;
   color: #FFFFFF;
   background: transparent;
   border: 1px solid #FFFFFF;
   box-shadow: 5px 4px 4px 0px #00000040;
   margin: 10px;
`

export const AboutContainer=styled.div`
   width: 100vw;
   height: 345px;
   top: 599px;
   left: -3px;
   background: 
      linear-gradient( #99A1D752),
      url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750412791/Aboutus_bg_upaufr.png");
   background-size: cover;
   color: white;
   display: flex;
   justify-content: space-around;

   @media (max-width:577px){
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     padding:20px;
     align-items: center;
   }

`;

export const AboutContent=styled.div`
   display: flex;
   align-items: space-around;

   @media (max-width:577px){
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     height: 100px;
   }
`; 

export const AboutHeadings=styled.div`
   display: flex;
   flex-direction: column;
   height: 345px;
   justify-content: center;
   
   @media (max-width:577px){
     align-items: flex-start;
     height:195px;
   }

`;

export const Heading1=styled.h1`
   width: 452px;
   height: 117px;
   top: 32px;
   left: 206px;
   font-family: Montserrat;
   font-weight: 400;
   font-size: 35px;
   line-height: 100%;
   letter-spacing: 0%;
   
   @media (max-width:577px){
    heading: 20px;
    font-size: 15px; 
    height:20px;  
   }



`;

export const Heading2=styled.h1`
   width: 411px;
   height: 146px;
   top: 116px;
   left: 206px;
   font-family: Montserrat;
   font-weight: 400;
   font-size: 35px;
   line-height: 100%;
   letter-spacing: 0%;

   @media (max-width:577px){
    heading: 20px;
    font-size: 15px; 
    top: 30px;
    line-height: none;  
    height:20px; 
   }

`;

export const AboutPara=styled.p`
   width: 712px;
   top: 64px;
   left: 658px;
   font-family: Inter;
   font-weight: 400;
   font-size: 20px;
   line-height: 100%;
   letter-spacing: 0%;

   @media (max-width:577px){
    font-size: 15px; 
    width: 412px;
   }
`;

export const HomeProjectContainer = styled.div`
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750418650/HomeProjectbg_bigoru.png");
  background-size: cover;
  box-sizing: border-box;
`;



export const ProjectHeading=styled.h1`
   top: 969px;
   left: 584px;
   font-family: Mplus 1p Bold;
   font-weight: 700;
   font-size: 35px;
   line-height: 100%;
   letter-spacing: 0%;
   color: white;

   @media(max-width:577px){
    font-size: 15px;
   }
`;

export const SlideCard = styled.div`
  background-color: #fff;
  padding: 60px 20px;
  margin: 10px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-size: 24px;
  width: 80%;
  height: 250px; 
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
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

  @media (max-width:577px){
   margin:70px;
  }
`;

export const CarouselImage = styled.img`
  width: 1440px;
  max-width: 350px;
  height: 350px;
  border: 5px solid white;
  border-radius: 30px;
  object-fit: cover;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;

  @media (max-width: 577px) {
    max-width: 60%;
    height: auto;
  }
`;

export const CarouselHeading = styled.h2`
  margin-top: 20px;
  font-size: 22px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  text-align: center;

  @media (max-width: 577px) {
    font-size: 15px;
    max-width: 60%;
  }
`;

export const AiAndIot=styled.div`
   background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750511964/AiIot_mvmljr.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 976px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;

  @media(max-width:577px){
      width: 100vw;
      height: 382px;
      

  }
`;

export const AiHeading=styled.h1`
   font-family: 'M PLUS 1p', sans-serif;
  font-weight: 700;
  font-size: 45px;
  color: white;
  max-width: 800px;
  padding: 20px;
  line-height: 1.3;

  @media(max-width:577px){
    font-size: 15px;
  }
  
`;

export const VectorContainer=styled.div`
   display: flex;
`;

export const Image=styled.div`
   width: 463px;
   height: 312px;
   top: 45px;
   left: 126px;
   background-image:
      linear-gradient(rgba(115, 123, 197, 0.75),rgba(115, 123, 197, 0.75)),
      url(${props => props.$bg});
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
   background-position: center;
   background-repeat: no-repeat;

   @media(max-width:577px){
      width: 325px;
      height: 182px;
   }
`;

export const Paragraph=styled.p`
   font-family: Montserrat;
   font-weight: 600;
   font-size: 25px;
   line-height: 100%;
   letter-spacing: 0%;
   color: white;
`;

export const Design=styled.div`
   background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750529820/Design_ylyw0c.png");
   background-size: cover;
   width: 100vw;
   height: 567px;
   top: 2590px;
   left: -1px;
   display: flex;
   padding: 50px;
   box-sizing: border-box;
   justify-content: space-around;
   padding-top: 70px;

   @media(max-width:577px){
      display:none;
   }
`;

export const MobileDesign=styled.div`
   display: none;

   @media(max-width:577px){
      background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750529820/Design_ylyw0c.png");
      background-size: cover;
      width: 100vw;
      height: 467px;

      display: flex;
      flex-direction: column;
      padding: 40px;
      padding-top: 10px;
      box-sizing: border-box;
      justify-content: space-around;
      
      align-items: center;
   }
`;

export const SubDiv=styled.div`
   display: flex;
   flex-direction: column;
   margin: 20px;
   justify-content: space-around;
   height: 267px;

   @media(max-width:577px){
   align-items: center;
   margin:10px;
   }
`;

export const DesignImage=styled.img`
   width: 499.4999694824219px;
   height: 333px;
   top: 2623px;
   left: 821px;

   @media(max-width:577px){
   width: 205.5px;
   height: 137px;
   top: 1737px;
   left: 104px;

   }
`;

export const Bulb=styled.div`
   background: #150C11;
   width: 100vw;
   height: 567px;
   top: 2590px;
   left: -1px;
   display: flex;
   padding: 50px;
   box-sizing: border-box;
   justify-content: space-around;
   padding-top: 70px;

   @media(max-width:577px){
   display:none;
   }
`;

export const MobileBulb=styled.div`
display:none;
@media(max-width:577px){
   background: #150C11;
   width: 100vw;
   height: 567px;
   top: 2590px;
   left: -1px;
   display: flex;
   padding: 50px;
   box-sizing: border-box;
   justify-content: space-around;
   padding-top: 70px;
}
`;

export const BulbImage=styled.img`
   width: 316px;
   height: 474px;
   top: 2997px;
   left: 913px;

   @media(max-width:577px){
   width: 175.5px;
   height: 237px;
   top: 1737px;
   left: 104px;

`;

export const AchievementCard=styled.div`
   display: flex;
   flex-direction: column;
   width: 100vw;
   height: 571px;
   top: 3437px;
   left: -15px;
   background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750560676/Achivementbg_pspg2r.png");
   background-size: cover;
   padding: 30px;
   box-sizing: border-box;
`;

export const AchieveHeading=styled.h1`
   font-family: Montserrat;
   font-weight: 700;
   font-size: 30px;
   line-height: 100%;
   letter-spacing: 0%;
   text-align: center;
   color: white;

   @media(max-width:577px){
   font-size: 15px;
   }
`;

export const AchievePara=styled.p`
   font-family: Montserrat;
   font-weight: 300;
   font-size: 20px;
   line-height: 100%;
   letter-spacing: 0%;
   text-align: center;
   color: white;
`;

export const AchieveListCards=styled.div`
   display: flex;
   justify-content: space-around;
   margin: 20px;

   @media (max-width:577px){
      display:none
   }
`;

export const MobileAchieveListCards=styled.div`  
   display:none;

   @media (max-width:577px){
      display: flex;
      justify-content: space-around;
      margin: 20px;
   }
`;

export const Card=styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 250px;

  @media (max-width:577px){
  align-items: center;
  justify-content: space-around;

  h1{
    text-align:center;
  }

  button{
    margin-left: 80px;
  }
  }

`;

export const AchieveImage=styled.img`
   width: 350px;
   height: 281px;
   top: 3633px;
   left: 998px;
   border-width: 1px;
   border: 1px solid #FFFFFF;
   box-shadow: 0px 4px 4px 0px #00000040;

   @media (max-width:577px){
  height: 200px;
  width: 300px;
  margin-left:30px;
  }

`;

export const Linear=styled.div`
   width: 100vw;;
   height: 71px;
   top: 4107px;
   left: -15px;
   background: linear-gradient(90deg, #F159CB 0%, #00D30B 36.12%, #0D0E4B 51.92%, #E03639 71.15%, #4CB6D4 92.31%);
`;

export const QuestionCard=styled.div`
   display: flex;
   justify-content: space-around;
   width: 100vw;
   height: 1182px;
   top: 4178px;
   left: -44px;
   background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750562853/logbg_hwepch.png");
   background-size: cover;
   padding: 30px;
   align-items: center;

   @media (max-width:577px){
   flex-direction: column;
   height: 582px;
   }
`;

export const Form=styled.form`
   width: 796px;
   height: 1022px;
   top: 4243px;
   left: 582px;
   border-radius: 61px;
   background: #D9D4EF3D;
   padding: 30px;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: space-around;

   @media(max-width:577px){
   width: 344px;
height: 394px;

border-radius: 47px;

   }
`;

export const Label=styled.label`
   font-family: Inter;
   font-weight: 700;
   font-size: 35px;
   line-height: 100%;
   letter-spacing: 0%;
   color: white;
   margin: 20px;

   @media(max-width:577px){
       font-size: 15px;
   }
`;

export const Input=styled.input`
   width: 521px;
   top: 4377px;
   left: 795px;
   border-width: 3px;
   border: none;
   border-bottom: 3px solid #FFFFFF;
   background: transparent;

    @media(max-width:577px){
       width: 121px;
   }
`;

export const TextArea=styled.textarea`
   width: 673px;
   height: 305px;
   top: 4792px;
   left: 662px;
   border-width: 1px;
   border-radius: 81px;
   background: #FFFFFF;
   border: 1px solid #000000;

   @media(max-width:577px){
       width: 121px;
       height: 105px;
       border-radius: 10px;
   }

`;

export const SubmitButton=styled.button`
   width: 269px;
   height: 77px;
   top: 5143px;
   left: 845px;
   border-radius: 14px;
   background: #2575DC;
   border-width: 0;
   align-self: center;

   @media(max-width:577px){
      width: 111px;
      height: 23px;

      border-radius: 14px;

   }

`;

export const OpportunityCard=styled.div`
   background-image: url("https://res.cloudinary.com/dsedlicx9/image/upload/v1750564511/opportunities_hjxd67.png");
   background-size: cover;
   width: 100vw;;
   height: 239px;
   top: 5327px;
   border-width: 1px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`; 

export const ExploreButton=styled.button`
   width: 269px;
   height: 77px;
   top: 120px;
   left: 610px;
   border-width: 1px;
   border-radius: 14px;
   background: #9037C3;
   border: 1px solid #2F36BF;
   color:white;
`;