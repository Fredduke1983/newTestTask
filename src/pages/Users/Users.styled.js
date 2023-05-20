import styled from 'styled-components';

const UsersStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const LoadMore = styled.button`
  margin: 10px auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: #ebd8ff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px;
  border-radius: 10px;
  cursor: pointer;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  text-transform: uppercase;

  transition: box-shadow 300ms, background 300ms;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 5px;
    background: #5cd3a8;
  }
`;

export { UsersStyle, LoadMore };
