import React from 'react';
import { Alert, Form, Input, Typography } from 'antd';
import "./ForgetPassword.css";

const App = () => {
  const [form] = Form.useForm();
  return (
    
    <Form className='form'
      form={form}
      name="dependencies"
      autoComplete="off"
      style={{
        maxWidth: 600,
      }}
      layout="vertical"
    >
      <Alert message=" Try modify `Password2` and then modify `Password`" type="info" showIcon />

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="password2"
        dependencies={['password']}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>
      <button className='forget-button'>Kaydet</button>
      <Form.Item noStyle dependencies={['password2']}>
      </Form.Item>
    </Form>

  );
};
export default App;