import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/auth';
import { startTransition } from 'react';
import { Form, Input, Button } from 'antd';
import LoadingOverlay from './LoadingOverlay';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    try {
      setLoading(true);
      const { user, error: loginError } = await dispatch(login(values.username, values.password));
      if (user) {
        history.push('/');
        window.location.reload();
      } else {
        setError(loginError);
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const registerPage = () => {
    startTransition(() => {
      history.push('/register');
    });
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleLogin}
      style={{ width: '300px', margin: 'auto', marginTop: '100px' }}
      className="max-w-md mt-16 p-6 bg-white rounded-md shadow-md"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        className="text-bermuda mb-4"
      >
        <Input className="w-full" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        className="mb-4"
      >
        <Input.Password className="w-full" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Log in
        </Button> Or <a onClick={registerPage}>register now!</a>
      </Form.Item>
      <Form.Item>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form.Item>
      <LoadingOverlay visible={loading} />
    </Form>
  );
};

export default Login;
