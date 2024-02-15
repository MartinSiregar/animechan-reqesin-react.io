import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  const headerStyle = {
    backgroundColor: '#06b6d4',
    color: 'white',
  };

  return (
    <Header style={headerStyle}>
      <Title level={3} style={headerStyle}>
        Animechan
      </Title>
    </Header>
  );
};

export default AppHeader;


