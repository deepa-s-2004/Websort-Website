import { FcGoogle } from "react-icons/fc";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import {
  ProfileContainer,
  ProfileContentLeft,
  ProfileContentRight,
  Image,
  Paragraph,
  LogosContainer,
  Icon
} from './WebsortProfileStyle.js';

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileContentLeft>
        <Image src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750397724/websort_logo_oychgm.png" />
        <Paragraph>
          Web Development | App Development | UI/UX Design | Digital Marketing
        </Paragraph>
      </ProfileContentLeft>

      <ProfileContentRight>
        <Paragraph>
          Based in Bangalore | ✉️ contact@websort.com | 📞 +91-XXXXXXXXXX
        </Paragraph>
        <LogosContainer>
          <Icon>
            <FcGoogle />
          </Icon>
          <Icon>
            <CiInstagram />
          </Icon>
          <Icon>
            <FaFacebookSquare />
          </Icon>
        </LogosContainer>
      </ProfileContentRight>
    </ProfileContainer>
  );
};

export default Profile;
