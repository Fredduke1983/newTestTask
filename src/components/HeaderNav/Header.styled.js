import styled from 'styled-components';

const Header = styled.header`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #00000005;
  box-shadow: 0px 1px 4px black;
`;

const HeaderList = styled.ul`
  font-size: 20px;
  display: flex;
  gap: 20px;
  a {
    text-decoration: none;
    transition: text-shadow 300ms;
  }
  a:hover {
    text-shadow: 0px 1px 2px #000;
  }
  .active {
    color: blue;
  }
`;
export { Header, HeaderList };
