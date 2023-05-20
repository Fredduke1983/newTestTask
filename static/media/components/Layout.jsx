import { Outlet } from 'react-router';
import { HeaderNav } from './HeaderNav/HeaderNav';

export const Layout = () => {
  return (
    <div>
      <HeaderNav />
      <Outlet />
    </div>
  );
};
