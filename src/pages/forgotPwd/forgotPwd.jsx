import 'antd/dist/antd.css'
import './forgotPwd.css'
import logo from './images/logo.png'
import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined, VerifiedOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

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
  const gotoLogin = () => {
    navigate('/login')
  };
  const gotoRegister = () => {
    navigate('/register')
  };
  let t = 60
  const [isSend, setIsSend] = useState(false)
  const [sendSec, setSendSec] = useState(0)
  // const [num, setNum] = useState(0) // 倒计时
  const onSent = () => {
    setSendSec(60)
    setIsSend(true)
  };
  useEffect(() => {
    let timer = 0;
    if (isSend && sendSec != 0) {
      timer = setInterval(() => {
        // 这时候的num由于闭包的原因，一直是0，所以这里不能用setNum(num-1)
        setSendSec(n => {
          if (n == 1) {
            setIsSend(false)
            clearInterval(timer)
          }
          return n - 1
        });
      }, 1000)
    }
    return () => {
      // 组件销毁时，清除定时器
      clearInterval(timer)
    };
  }, [isSend])

  return (
    <div className="forgotPwd">
      <header className="forgotPwd-header">
        <img src={logo} alt={logo} />
        <h1>珠科志愿者系统</h1>
      </header>
      <section className="forgotPwd-content">
        <h2>修改密码</h2>
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
                  message: '请输入新密码!',
                },
              ]}
            >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="新密码" />
            </Form.Item>
            <Form.Item name="confirmPwd"
              rules={[
                {
                  required: true,
                  message: '请输入确认密码!',
                },
              ]}
            >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="再次输入新密码" />
            </Form.Item>
            <Form.Item name="phone"
            >
              <Input.Group compact rules={[
                {
                  required: true,
                  message: '请输入确认密码!',
                },
              ]}>
                <Input prefix={<PhoneOutlined className="site-form-item-icon" />} style={{ width: 'calc(100% - 115px)' }} placeholder="手机号码" />
                <Button className="send-verCode-button" onClick={onSent} disabled={isSend}>
                  {!isSend && <p>发送验证码</p>}
                  {isSend && <p>{sendSec} s</p>}
                </Button>
              </Input.Group>
            </Form.Item>
            <Form.Item name="verCode"
              rules={[
                {
                  required: true,
                  message: '请输入验证码!',
                },
              ]}
              extra={
                <>
                  <a className="forgotPwd-gotoLogin" onClick={gotoLogin}>已有账户？去登陆</a>
                  <a className="forgotPwd-gotoRegister" onClick={gotoRegister}>没有账户？去注册</a>
                </>
              }
            >
              <Input prefix={<VerifiedOutlined className="site-form-item-icon" />} type="password" placeholder="验证码" />

            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  )
}