import { NavLink } from 'react-router-dom';
import { Header, HeaderList } from './Header.styled';

export const HeaderNav = () => {
  return (
    <Header>
      <HeaderList>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweeters">Tweeters</NavLink>
      </HeaderList>
    </Header>
  );
};
