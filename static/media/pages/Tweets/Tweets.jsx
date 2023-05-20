import { useLocation, useParams } from 'react-router';
import { getUserById } from '../../utils/fetches';
import { useEffect, useState } from 'react';
import {
  TweetsTitle,
  TweetterAvatar,
  TweetterBackArrow,
  TweetterDesc,
  TweetterItem,
  TweetterList,
  TweetterName,
  TweetterRightSide,
  TweetterStyle,
  TweetterText,
  TweetterTitle,
} from './Tweets.styled';
import { AiOutlineRollback } from 'react-icons/ai';

export const Tweets = () => {
  const { id } = useParams();
  const [tweetter, setTweetter] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!id) return;

    getUserById(id).then(({ data }) => {
      setTweetter(data);
    });
  }, [id]);

  return (
    tweetter && (
      <TweetterStyle>
        <TweetterBackArrow to={location.state}>
          <AiOutlineRollback style={{ width: '40px', height: '40px' }} />
          <p>back</p>
        </TweetterBackArrow>

        <TweetterTitle>Tweetter Info</TweetterTitle>
        <TweetterDesc>
          <TweetterAvatar src={tweetter.avatar} />
          <TweetterRightSide>
            <TweetterName>{tweetter.user}</TweetterName>
            <TweetterText>
              He has {tweetter.followers} followers, and{' '}
              {tweetter.tweets.length} tweets
            </TweetterText>
          </TweetterRightSide>
        </TweetterDesc>
        <TweetterList>
          <TweetsTitle>Tweets</TweetsTitle>
          {tweetter.tweets.map(el => {
            return <TweetterItem key={el}> &quot;{el}&quot;</TweetterItem>;
          })}
        </TweetterList>
      </TweetterStyle>
    )
  );
};
