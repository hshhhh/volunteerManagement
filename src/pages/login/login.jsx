import 'antd/dist/antd.css'
import './login.css'
import logo from './images/logo.png'
import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const onFinish = (values) => {
    if (values.username === 'admin' && values.password === 'admin') {
      navigate('/list')
      message.success('登录成功')
    } else {
      message.error('账号或密码错误')
    }
  };
  const gotoRegister = (values) => {
    navigate('/register')
  };

  return (
    <div className="login">
      <header className="login-header">
        <img src={logo} alt={logo} />
        <h1>珠科志愿者系统</h1>
      </header>
      <section className="login-content">
        <h2>用户登录</h2>
        <div className="login-form">
          <Form name="normal_login" className="login-form" onFinish={onFinish}>
            <Form.Item name="username"
              rules={[
                {
                  required: true,
                  message: '请输入账号!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
            </Form.Item>
            <Form.Item name="password"
              rules={[
                {
                  required: true,
                  message: '请输入密码!',
                },
              ]}
              extra={
                <>
                  <a className="register-gotoRegister" onClick={gotoRegister}>没有账户？注册一个</a>
                  <div className="forgotPwd">忘记密码？</div>
                </>
              }
            >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
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