import React from 'react';
import { Spin } from 'antd';

const LoadingOverlay = ({ visible }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: visible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default LoadingOverlay;
