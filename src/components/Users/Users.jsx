import { Card } from 'components/Card/OneCard';
import { UsersStyle } from './Users.styled';

export const Users = ({ users, isFollows, changeFollowers }) => {
  return (
    <UsersStyle>
      {users &&
        users.map(user => {
          return (
            <Card
              key={user.id}
              user={user.user}
              id={user.id}
              avatar={user.avatar}
              tweets={user.tweets}
              followers={Number(user.followers)}
              changeFollowers={changeFollowers}
              isFollows={isFollows}
            />
          );
        })}
    </UsersStyle>
  );
};
