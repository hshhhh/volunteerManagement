import {Layout, Menu, Breadcrumb, Dropdown, message} from 'antd';
import {TeamOutlined, ExceptionOutlined, NotificationOutlined, DownOutlined, UngroupOutlined} from '@ant-design/icons';
import './admin.css'
import logo from '../../assets/images/logo-bai.png'
import defaultHeadImg from '../../assets/images/headImg.png'
import HeadImg from '../../assets/images/logo.png'
import {Outlet} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;


export default function () {
  const navigate = useNavigate();

  const gotoLogin = (values) => {
    message.success('您已退出登录')
    navigate('/login')
  };
  const onClick = (values) => {
    const key = values.key
    console.log(key)
    switch (key) {
      case '1': {
        navigate('/list')
        break
      }
      case '2': {
        navigate('/blacklist')
        break
      }
      case '3': {
        navigate('/list')
        break
      }
      case '4': {
        navigate('/list')
        break
      }
      case '5': {
        navigate('/list')
        break
      }
      case '6': {
        navigate('/regulations')
        break
      }
    }
  };

  const menu = (
    <Menu theme="dark">
      <Menu.Item>
        <a style={{fontSize: "10px"}}>
          修改资料
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={gotoLogin} style={{fontSize: "10px"}}>
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout className='container'>
      <header className='header'>
        <img src={logo}/>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color: "white"}}>
            <img src={HeadImg}/>
            校青协 <DownOutlined/>
          </a>
        </Dropdown>
      </header>
      <Layout className='container-content'>
        <Sider width={200}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            onClick={onClick}
            style={{height: '100%', borderRight: 0}}
          >
            <Menu.Item icon={<TeamOutlined />} key="1">名单</Menu.Item>
            <Menu.Item icon={<ExceptionOutlined />} key="2">黑名单</Menu.Item>
            <Menu.Item icon={<ExceptionOutlined />} key="3">活动中心</Menu.Item>
            <Menu.Item icon={<UngroupOutlined />} key="4">组织管理</Menu.Item>
            <Menu.Item icon={<UngroupOutlined />} key="5">积分商城</Menu.Item>
            <Menu.Item icon={<NotificationOutlined/>} key="6">信用管理条例</Menu.Item>
            {/*<SubMenu key="sub" icon={<NotificationOutlined/>} title="subnav 3">*/}
            {/*  <Menu.Item key="4">option3</Menu.Item>*/}
            {/*  <Menu.Item key="5">option4</Menu.Item>*/}
            {/*</SubMenu>*/}
          </Menu>
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <Content className="myContent">
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
      <footer>
        Respect | Copyright &copy; 2022 Author HSH
      </footer>
    </Layout>
  )
}