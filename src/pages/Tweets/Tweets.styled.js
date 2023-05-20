import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TweetterBackArrow = styled(NavLink)`
  color: #212121;
  text-decoration: none;
  border: none;
  border-radius: 15px;
  transition: text-shadow 300ms;
  :hover {
    text-shadow: 0px 2px 4px black;
  }
`;

const TweetterStyle = styled.div`
  padding: 0 60px;
`;

const TweetterRightSide = styled.div`
  padding: 40px;
`;

const TweetterName = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const TweetterText = styled.h3`
  font-size: 16px;
`;

const TweetterDesc = styled.div`
  display: flex;
  margin-top: 40px;
  box-shadow: 0px 2px 5px black;
  border-radius: 15px;
`;

const TweetterTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;

const TweetterAvatar = styled.img`
  display: block;
  border-radius: 15px;
`;

const TweetterList = styled.ol``;

const TweetterItem = styled.li`
  padding: 15px 20px;
  margin-top: 4px;
  background: linear-gradient(
    356deg,
    rgba(241, 250, 238, 0.5) 10%,
    rgba(180, 182, 184, 0.756827731092437) 90%
  );
  box-shadow: 0px 2px 4px grey;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 300ms;
  :hover {
    background-color: #00000049;
  }
`;

const TweetsTitle = styled.h3`
  padding: 10px 0;
  font-size: 30px;
  text-shadow: 1px 1px 1px #000;
`;

export {
  TweetterStyle,
  TweetterAvatar,
  TweetterList,
  TweetterDesc,
  TweetterTitle,
  TweetterName,
  TweetterText,
  TweetterRightSide,
  TweetterItem,
  TweetsTitle,
  TweetterBackArrow,
};
