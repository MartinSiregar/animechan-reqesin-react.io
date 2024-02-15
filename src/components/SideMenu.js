import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import routes from '../routes';

const SideMenu = () => {
  return (
    <Menu>
      {routes.map((route) => (
        <Menu.Item key={route.path}>
          <Link to={route.path}>{route.path === '/' ? 'Home' : route.path.slice(1)}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default SideMenu;
