import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      © {new Date().getFullYear()} Animechan. All Rights Reserved.
    </Footer>
  );
};

export default AppFooter;
