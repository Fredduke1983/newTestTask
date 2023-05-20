import image from '../../assets/logo_orange.png';
import { HomeImg, HomeStyle, HomeTitle } from './Home.styled';

export const Home = () => {
  return (
    <HomeStyle>
      <HomeTitle>Wellcome to</HomeTitle>
      <HomeImg src={image}></HomeImg>
    </HomeStyle>
  );
};
