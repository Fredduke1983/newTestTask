import styled from 'styled-components';

const CardBody = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

const ImgLogo = styled.img`
  position: absolute;
  display: block;

  left: 20px;
  top: 20px;
  opacity: 0.3;
`;

const BgPicture = styled.img`
  position: absolute;
  display: block;

  top: 28px;
  left: 36px;
`;
const LineStyle = styled.img`
  position: absolute;
  display: block;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;

const FrameCircle = styled.img`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  border-radius: 50%;

  width: 80px;
  height: 80px;
`;
const Avatar = styled.img`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  z-index: 1;

  border-radius: 50%;

  width: 60px;
  height: 60px;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const CounterList = styled.ul`
  display: grid;
  gap: 16px;
`;

const Counter = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  min-width: 220px;
`;

const Btn = styled.button`
  display: block;
  margin: 26px auto 36px auto;
  width: 196px;
  height: 50px;
  background: ${props => (props.children === 'Follow' ? '#ebd8ff' : '#5CD3A8')};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;

export {
  CardBody,
  ImgLogo,
  BgPicture,
  LineStyle,
  FrameCircle,
  CardFooter,
  Counter,
  CounterList,
  Avatar,
  Btn,
};
