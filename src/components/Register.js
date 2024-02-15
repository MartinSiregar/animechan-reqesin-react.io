import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../store/actions/auth';
import { Form, Input, Button } from 'antd';
import LoadingOverlay from './LoadingOverlay';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegist = async (values) => {
    try {
      setLoading(true);
      const { regist, error: registError } = await dispatch(register(values));
      if (regist) {
        history.push('/login');
        window.location.reload();
      } else {
        setError(registError);
      }
    } catch (error) {
      console.error('Register error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      name="registration-form"
      onFinish={handleRegist}
      initialValues={{ remember: true }}
      layout="vertical"
      style={{ width: '300px', margin: 'auto', marginTop: '100px' }}
    >

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Invalid email format!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: 'Please input your password!' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <LoadingOverlay visible={loading} />
    </Form>
  );
};

export default Register;