import image from './img/goit_new.jpg';
import { HomeImg, HomeStyle, HomeTitle } from './Home.styled';

export const Home = () => {
  return (
    <HomeStyle>
      <HomeTitle>Wellcome to</HomeTitle>
      <HomeImg src={image}></HomeImg>
    </HomeStyle>
  );
};
