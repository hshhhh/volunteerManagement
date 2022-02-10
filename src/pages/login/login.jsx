import 'antd/dist/antd.css'
import './login.css'
import logo from './images/logo.png'
import {Button, Form, Input} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';

export default function () {
  const onFinish = (values) => {
    console.log(values)
  };

  return(
    <div className="login">
      <header className="login-header">
        <img src={logo} alt={logo}/>
        <h1>志愿者管理系统</h1>
      </header>
      <section className="login-content">
        <h2>用户登录</h2>
        <div className="login-form">
          <Form name="normal_login" className="login-form" onFinish={onFinish}>
            <Form.Item name="username"
                       rules={[
                         {
                           required: true,
                           message: '请输入用户名!',
                         },
                       ]}
                       initialValue='admin'
            >
              <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
            </Form.Item>
            <Form.Item name="password"
                       rules={[
                         {
                           required: true,
                           message: '请输入密码!',
                         },
                       ]}
            >
              <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password" placeholder="密码"/>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  )
}