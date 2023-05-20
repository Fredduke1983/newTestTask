import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import {
  BgPicture,
  FrameCircle,
  Btn,
  CardBody,
  CardFooter,
  Counter,
  CounterList,
  ImgLogo,
  LineStyle,
  Avatar,
} from './card.styled';
import logo from './img/LogoGoit.png';
import bg from './img/bgpicture.png';
import line from './img/centerLine.png';
import frame from './img/frame.png';
import { setUserFollowers } from '../../utils/fetches';
import { nanoid } from 'nanoid';

const Card = ({
  avatar,
  tweets,
  followers,
  id,
  changeFollowers,
  user,
  isFollows,
}) => {
  const [isFollowing, setIsFollowing] = useState(isFollows.includes(id));
  const location = useLocation();

  const handleOnClick = () => {
    let followersToString = 0;

    isFollowing
      ? (followersToString = followers - 1)
      : (followersToString = followers + 1);

    setIsFollowing(!isFollowing);
    const body = JSON.stringify({
      followers: followersToString.toString(),
    });
    setUserFollowers(id, body);
    changeFollowers({
      user,
      tweets,
      followers: followersToString.toString(),
      avatar,
      id,
    });
  };

  return (
    <CardBody>
      <ImgLogo src={logo} />
      <BgPicture src={bg} />
      <LineStyle src={line} />

      <Avatar src={avatar} />

      <NavLink state={location} to={`/tweets/${id}`}>
        <FrameCircle src={frame} />
      </NavLink>

      <CardFooter>
        <CounterList>
          <Counter key={nanoid()}>
            {tweets.length.toLocaleString('en')} tweets
          </Counter>
          <Counter key={nanoid()}>
            {followers.toLocaleString('en')} Followers
          </Counter>
        </CounterList>

        {isFollowing ? (
          <Btn onClick={handleOnClick}>Following</Btn>
        ) : (
          <Btn onClick={handleOnClick}>Follow</Btn>
        )}
      </CardFooter>
    </CardBody>
  );
};

export { Card };

Card.propTypes = {
  avatar: PropTypes.string,
  tweets: PropTypes.array,
  followers: PropTypes.number,
  id: PropTypes.string,
  isFollows: PropTypes.array,
  changeFollowers: PropTypes.func,
  user: PropTypes.string,
};
