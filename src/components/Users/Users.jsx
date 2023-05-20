import { Card } from 'components/Card/OneCard';
import { UsersStyle } from './Users.styled';
import { useEffect, useState } from 'react';

export const Users = ({ users, isFollows, changeFollowers, selectedValue }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    if (selectedValue === 'follow') {
      setFilteredUsers(users.filter(user => !isFollows.includes(user.id)));
    } else if (selectedValue === 'following') {
      setFilteredUsers(users.filter(user => isFollows.includes(user.id)));
    } else {
      setFilteredUsers(users);
    }
  }, [isFollows, selectedValue, users]);

  return (
    <UsersStyle>
      {filteredUsers.length > 0 &&
        filteredUsers.map(user => {
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
